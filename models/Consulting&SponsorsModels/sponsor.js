const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
  regNo: {
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
  SponsorPhoneNo: {
    type: Number,
    required: true,
  },
  sponsorEmail: {
    type: String,
    required: true,
  },
  sponsorAddress: {
    type: String,
    required: true,
  },
  sponsorLogo: {
    type: String,
    required: false,
  },
});

const Sponsor = mongoose.model("SponsorData", SponsorSchema);
module.exports = Sponsor;
