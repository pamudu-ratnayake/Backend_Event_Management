const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  iv: {
    type: String,
    // required: true,
  },
  doctor_id: { type: String },
  specialist: { type: String },
  email: { type: String },
  phone_number: { type: String },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
