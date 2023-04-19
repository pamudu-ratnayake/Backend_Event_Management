let emailModel = require("../../models/emailModel/email");
const axios = require("axios");
const path = require("path"); // require the path module

// Update Email with PDF file
exports.update = async (req, res) => {
  console.log(`<=== Update Email ====>`);
  let id = req.params.id;
  const result = await emailIdentifier(req.body.description);
  let { name, iv, email, description, reply } = encryptingHandler(
    req.body,
    result.status
  );

  const emailUpdate = {
    name,
    iv,
    email,
    description,
    reply,
  };

  const update = await emailModel
    .findByIdAndUpdate(id, emailUpdate)
    .then(() => {
      res.status(200).send({ status: "Email Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

// include crypto module
const crypto = require("crypto");

// set encryption algorithm
const algorithm = "aes-256-cbc";

// private key
const key = "adnan-tech-programming-computers"; // must be of 32 characters

function encrypting(data, iv) {
  // encrypt the string using encryption algorithm, private key and initialization vector
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encryptedData = cipher.update(data, "utf-8", "hex");
  encryptedData += cipher.final("hex");

  return encryptedData;
}

function decrypting(data, origionalData) {
  // decrypt the string using encryption algorithm and private key
  const decipher = crypto.createDecipheriv(algorithm, key, origionalData);
  let decryptedData = decipher.update(data, "hex", "utf-8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
}

async function emailIdentifier(descriptipn) {
  try {
    const res = await axios.post(
      "http://localhost:8000/email/?descriptipn=" + descriptipn
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

function decryptingHandler(obj, origionalData, staus) {
  console.log("decy ", staus);
  const decrypObj = {
    name: decrypting(obj.name, origionalData),
    email: decrypting(obj.email, origionalData),
    description:
      staus === 1
        ? decrypting(obj.description, origionalData)
        : obj.description,
    reply: decrypting(obj.reply, origionalData),
    id: obj._id,
  };

  return decrypObj;
}

function encryptingHandler(obj, status) {
  // random 16 digit initialization vector
  const iv = crypto.randomBytes(16);
  let description =
    status === 1 ? encrypting(obj.description, iv) : obj.description;
  // convert the initialization vector to base64 string
  const base64data = Buffer.from(iv, "binary").toString("base64");
  const encrypeObj = {
    name: encrypting(obj.name, iv),
    email: encrypting(obj.email, iv),
    description,
    reply: encrypting(obj.reply, iv),
    iv: base64data,
  };

  return encrypeObj;
}

exports.create = async (req, res, next) => {
  console.log(`<=== Create Email ====>`);
  // Assigning value to variabales
  result = await emailIdentifier(req.body.description);
  console.log("result", result.data.status);
  let { name, iv, email, description, reply } = encryptingHandler(
    req.body,
    result.data.status
  );

  const newEmail = new emailModel({
    name,
    iv,
    email,
    description,
    reply,
    isEncrypt: result.data.status,
  });

  newEmail
    .save()
    .then(() => {
      res.json(" Email Send , " + result.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Email ====>`);
  emailModel
    .find()
    .then((emails) => {
      let decryptEmails = [];
      for (let index = 0; index < emails.length; index++) {
        let email = emails[index];
        let origionalData = Buffer.from(email.iv, "base64");
        let element = decryptingHandler(email, origionalData, email.isEncrypt);
        decryptEmails.push(element);
      }
      res.json(decryptEmails);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPdfs = (req, res) => {
  console.log("<========= getPdfs =========>");
  const filePath = path.join(__dirname, "../files/sample1.pdf"); // Use the path module to join the server's root directory with the file path
  console.log("filePath", filePath);
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(filePath);
};
