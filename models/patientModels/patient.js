const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  iv: {
    type: String,
    // required: true,
  },
  patient_id: { type: String },
  nic: { type: String },
  dob: { type: String },
  vaccine: { type: String },
  address: { type: String },
  gender: { type: String },
  age: { type: String },
  weight: { type: String },
  height: { type: String },
  email: { type: String },
  phone_number: { type: String },
  insurance_date: { type: String },
  file: { type: String },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
