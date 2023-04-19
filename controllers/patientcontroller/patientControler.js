let PatientModel = require("../../models/patientModels/patient");

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
    patient_id: decrypting(obj.patient_id, origionalData),
    nic: decrypting(obj.nic, origionalData),
    dob: decrypting(obj.dob, origionalData),
    vaccine: decrypting(obj.vaccine, origionalData),
    address: decrypting(obj.address, origionalData),
    gender: decrypting(obj.gender, origionalData),
    age: decrypting(obj.age, origionalData),
    weight: decrypting(obj.weight, origionalData),
    height: decrypting(obj.height, origionalData),
    email: decrypting(obj.email, origionalData),
    phone_number: decrypting(obj.phone_number, origionalData),
    insurance_date: decrypting(obj.insurance_date, origionalData),
    file: decrypting(obj.file, origionalData),
  };

  return decrypObj;
}

exports.create = (req, res, next) => {
  console.log(`<=== Create Patient ====>`);
  // Assigning value to variabales

  // random 16 digit initialization vector
  const iv = crypto.randomBytes(16);

  let name = encrypting(req.body.name, iv);
  let patient_id = encrypting(req.body.patient_id, iv);
  let nic = encrypting(req.body.nic, iv);
  let dob = encrypting(req.body.dob, iv);
  let vaccine = encrypting(req.body.vaccine, iv);
  let address = encrypting(req.body.address, iv);
  let gender = encrypting(req.body.gender, iv);
  let age = encrypting(req.body.age, iv);
  let weight = encrypting(req.body.weight, iv);
  let height = encrypting(req.body.height, iv);
  let email = encrypting(req.body.email, iv);
  let phone_number = encrypting(req.body.phone_number, iv);
  let insurance_date = encrypting(req.body.insurance_date, iv);
  let file = encrypting(req.body.file, iv);

  // convert the initialization vector to base64 string
  const base64data = Buffer.from(iv, "binary").toString("base64");
  // const newPatient = new PatientModel({ name: encryptedData, iv: base64data });

  const newPatient = new PatientModel({
    name,
    iv: base64data,
    patient_id,
    nic,
    dob,
    vaccine,
    address,
    gender,
    age,
    weight,
    height,
    email,
    phone_number,
    insurance_date,
    file,
  });

  newPatient
    .save()
    .then(() => {
      res.json(" Patient Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Patients ====>`);
  PatientModel.find()
    .then((patients) => {
      let decryptPatients = [];
      for (let index = 0; index < patients.length; index++) {
        let patient = patients[index];
        let origionalData = Buffer.from(patient.iv, "base64");
        let element = decryptingHandler(patient, origionalData);
        decryptPatients.push(element);
      }
      res.json(patients);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update Patient
exports.update = async (req, res) => {
  console.log(`<=== Update Patient ====>`);
  let id = req.params.id;
  const {
    servic_provider_Id,
    user_id,
    nic_no,
    first_name,
    last_name,
    user_name,
    email,
    mobile,
    telephone,
    address,

    company_id,
  } = req.body;

  const prof_img =
    "http://localhost:8080/public/uploads/" + req.file.originalname;

  const patientUpdate = {
    id,
    servic_provider_Id,
    user_id,
    nic_no,
    first_name,
    last_name,
    user_name,
    email,
    mobile,
    telephone,
    address,
    prof_img,
    company_id,
  };

  const update = await PatientModel.findByIdAndUpdate(id, patientUpdate)
    .then(() => {
      res.status(200).send({ status: "Patient Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.delete = async (req, res) => {
  console.log(`<=== Delete Patient ====>`);
  let id = req.params.id;

  await PatientModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Patient Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.getOne = async (req, res) => {
  console.log(`<=== Get Patient ====>`);

  let id = req.params.id;
  await PatientModel.findById(id)
    .then((patient) => {
      // convert initialize vector from base64 to buffer
      const origionalData = Buffer.from(patient.iv, "base64");

      const decrypObj = decryptingHandler(patient, origionalData);

      res.json(decrypObj);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPatientByUserId = async (req, res) => {
  console.log(`<=== Get Patient By UserID ====>`);

  let id = req.params.id;

  await PatientModel.findOne({
    user_id: id,
  })
    .then((patient) => {
      res.json(patient);
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.getAllPatientOne = (req, res, next) => {
//   console.log(`<=== Get All Patients ====>`);
//   PatientModel.find()
//     .sort({ _id: -1 })
//     .limit(1)
//     .then((patient) => {
//       res.json(patient);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

exports.updateReview = async (req, res) => {
  console.log(`<=== Update Patient Review ====>`);
  let id = req.params.id;
  const review_rate = req.body.review_rate;

  const update = await PatientModel.findByIdAndUpdate(id, {
    $push: { review_rate: review_rate },
  })
    .then(() => {
      res.status(200).send({ status: "Patient Rating Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};
