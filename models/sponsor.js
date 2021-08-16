const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
  sponsorID: {
    type: String,
    require: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  sponsorType: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

const Sponsor = mongoose.model("SponsorData", SponsorSchema);
module.exports = Sponsor;
