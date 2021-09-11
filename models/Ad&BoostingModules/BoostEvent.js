const mongoose = require("mongoose");


const EventBoostSchema = new mongoose.Schema({
    Customer_Name: {
    type: String,
    require: true,
  },
  
  nic_no: {
    type: String,
    required: true,
  },
  email_E: {
    type: String,
    required: true,
  },
  contact_Number_E: {
    type: Number,
    required: true,
  },
  Boost_Purpose: {
    type: String,
    required: true,
  },
  service_Type: {
    type: String,
    required: true,
  },
 
});

const Advertisement = mongoose.model("Event Boosting Details", EventBoostSchema);
module.exports = Advertisement;