const crypto = require("crypto");

const encryptFile = async (fileData, password) => {
  const key = crypto.scryptSync(password, "salt", 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encrypted = cipher.update(fileData);
  const finalBuffer = Buffer.concat([encrypted, cipher.final()]);
  return Buffer.concat([iv, finalBuffer]);
};

// Update Email
exports.update = async (req, res) => {
  console.log(`<=== Update Email ====>`);
  let id = req.params.id;
  const result = await emailIdentifier(req.body.description);
  let { name, iv, email, description, reply } = encryptingHandler(
    req.body,
    result.status
  );

  // Encrypt the file using the provided password
  const encryptedFile = await encryptFile(
    req.fileData.buffer,
    req.body.password
  );

  const emailUpdate = {
    name,
    iv,
    email,
    description,
    reply,
    encryptedFile,
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
