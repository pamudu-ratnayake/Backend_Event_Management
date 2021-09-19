const mongoose = require("mongoose");

//Advertiesment model
const AdvertisementSchema = new mongoose.Schema({
  service_Provider_Name: {
    type: String,
    require: true,
  },
  // SPID: {
  // type: String,
  // required: true,
  // },
  // AID: {
  // type: String,
  // required: true,
  // },
  email_SP: {
    type: String,
    required: true,
  },
  contact_Number_SP: {
    type: Number,
    required: true,
  },
  service_Type: {
    type: String,
    required: true,
  },
  advertisement_Duration: {
    type: String,
    required: true,
  },
  advertisement_title: {
    type: String,
    required: true,
  },
  advertisement_Des: {
    type: String,
    required: true,
  },
  advertisement_Pic: {
    type: String,
    required: true,
  },
  boosting_Pack:{
    type: String,
    required: false,
  }
  // PType: {
  //   type: String,
  //   required: true,
  // },
});

const Advertisement = mongoose.model("Advertisement Details", AdvertisementSchema);
module.exports = Advertisement;
