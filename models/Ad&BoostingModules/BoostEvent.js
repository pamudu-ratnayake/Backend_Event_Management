const mongoose = require("mongoose");

//Boosting model
const EventBoostSchema = new mongoose.Schema({
    Customer_Name: {
    type: String,
    require: true,
  },
  email_E: {
    type: String,
    required: true,
  },
  contact_Number_E: {
    type: Number,
    required: true,
  },
  
  service_Type: {
    type: String,
    required: true,
  },
 
});

const Advertisement = mongoose.model("Event Boosting Details", EventBoostSchema);
module.exports = Advertisement;