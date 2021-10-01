const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerDetailsSchema = new Schema({
  cus_userName: {
    type: String,
    required: true,
  },
  cus_FName: {
    type: String,
    required: true,
  },
  cus_LName: {
    type: String,
    required: true,
  },
  cus_nic: {
    type: String,
    required: true,
  },
  cus_gender: {
    type: String,
    required: false,
  },
  cus_address: {
    type: String,
    required: true,
  },
  cus_contact_no: {
    type: String,
    required: true,
  },
  cus_email: {
    type: String,
    required: true,
  },
  cus_description: {
    type: String,
    required: true,
  },
  prof_img: {
    type: String,
    required: false,
  },
  user_id: {
    type: String,
    required: true,
  },
});

const Customers = mongoose.model("Customers", customerDetailsSchema);

module.exports = Customers;
