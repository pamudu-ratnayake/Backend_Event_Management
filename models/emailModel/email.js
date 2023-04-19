const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  iv: {
    type: String,
    // required: true,
  },
  email: { type: String },
  description: { type: String },
  reply: { type: String },
  isEncrypt: { type: Number },
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
