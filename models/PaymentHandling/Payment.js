const mongoose = require("mongoose");

//Advertiesment model
const PaymentSchema = new mongoose.Schema({
  Name_On_Card: {
    type: String,
    require: true,
  },
  Card_Number: {
  type: Number,
  required: true,
  },
 
  CCV: {
    type: Number,
    required: true,
  },
  Expiry_Date: {
    type: Number,
    required: true,
  },
  
});

const Payment = mongoose.model("Advertisement Details", PaymentSchema);
module.exports = Payment;
