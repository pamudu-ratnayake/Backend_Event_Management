const mongoose = require("mongoose");

//Advertiesment model
const PaymentSchema = new mongoose.Schema({

  type_id:{
    type: String,
  },

  user_email: {
    type: String,
  },

  user_name: {
    type: String,
  },

  payment_date:{
    type: String,
  },

  date_event_occur:{
    type: String,
  },

  user_id:{
    type: String,
  },

  type_name:{
    type: String,
  },

  total:{
    type: String,
  },

  type:{
    type: String,
  },
});

const Payment = mongoose.model("Payement Details", PaymentSchema);
module.exports = Payment;
