let doctorModel = require("../../models/doctorModel/doctor");

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

function decryptingHandler(obj, origionalData) {
  const decrypObj = {
    name: decrypting(obj.name, origionalData),
    doctor_id: decrypting(obj.doctor_id, origionalData),
    specialist: decrypting(obj.specialist, origionalData),
    email: decrypting(obj.email, origionalData),
    phone_number: decrypting(obj.phone_number, origionalData),
    doctor_id: decrypting(obj.doctor_id, origionalData),
  };

  return decrypObj;
}

exports.create = (req, res, next) => {
  console.log(`<=== Create Doctor ====>`);
  // Assigning value to variabales

  // random 16 digit initialization vector
  const iv = crypto.randomBytes(16);

  let name = encrypting(req.body.name, iv);
  let specialist = encrypting(req.body.specialist, iv);
  let email = encrypting(req.body.email, iv);
  let phone_number = encrypting(req.body.phone_number, iv);
  let doctor_id = encrypting(req.body.doctor_id, iv);

  // convert the initialization vector to base64 string
  const base64data = Buffer.from(iv, "binary").toString("base64");

  const newDoctor = new doctorModel({
    name,
    iv: base64data,
    specialist,
    email,
    phone_number,
    doctor_id,
  });

  newDoctor
    .save()
    .then(() => {
      res.json(" Doctor Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Doctors ====>`);
  doctorModel
    .find()
    .then((patients) => {
      let decryptDoctors = [];
      for (let index = 0; index < patients.length; index++) {
        let patient = patients[index];
        let origionalData = Buffer.from(patient.iv, "base64");
        let element = decryptingHandler(patient, origionalData);
        decryptDoctors.push(element);
      }
      res.json(decryptDoctors);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOne = async (req, res) => {
  console.log(`<=== Get Doctor ====>`);

  let id = req.params.id;
  await doctorModel
    .findById(id)
    .then((doctor) => {
      // convert initialize vector from base64 to buffer
      const origionalData = Buffer.from(doctor.iv, "base64");

      const decrypObj = decryptingHandler(doctor, origionalData);

      res.json(decrypObj);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllDoctorOne = (req, res, next) => {
  console.log(`<=== Get All Doctors ====>`);
  doctorModel
    .find()
    .sort({ _id: -1 })
    .limit(1)
    .then((doctor) => {
      res.json(doctor);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update Doctor
// exports.update = async (req, res) => {
//   console.log(`<=== Update Doctor ====>`);
//   let id = req.params.id;
//   const {
//     servic_provider_Id,
//     user_id,
//     nic_no,
//     first_name,
//     last_name,
//     user_name,
//     email,
//     mobile,
//     telephone,
//     address,

//     company_id,
//   } = req.body;

//   const prof_img =
//     "http://localhost:8080/public/uploads/" + req.file.originalname;

//   const patientUpdate = {
//     id,
//     servic_provider_Id,
//     user_id,
//     nic_no,
//     first_name,
//     last_name,
//     user_name,
//     email,
//     mobile,
//     telephone,
//     address,
//     prof_img,
//     company_id,
//   };

//   const update = await doctorModel
//     .findByIdAndUpdate(id, patientUpdate)
//     .then(() => {
//       res.status(200).send({ status: "Patient Updated!" });
//     })
//     .catch((err) => {
//       res.status(500).send({ status: "Error! Cannot Update!" });
//       console.log(err.message);
//     });
// };

// exports.delete = async (req, res) => {
//   console.log(`<=== Delete Patient ====>`);
//   let id = req.params.id;

//   await doctorModel
//     .findByIdAndDelete(id)
//     .then(() => {
//       res.status(200).send({ status: "Patient Deleted!" });
//     })
//     .catch((err) => {
//       res.status(500).send({ status: "Error! Cannot Delete!" });
//       console.log(err.message);
//     });
// };
