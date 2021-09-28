const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
  event_id: {
    type: String,
    require: true,
  },
  sender_name: {
    type: String,
    require: true,
  },
  sponsorEmail: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  cus_email: {
    type: String,
    required: true,
  },
  reqDate: {
    type: String,
    required: true,
  },
});

const Sponsor = mongoose.model("RequestedSponsors", SponsorSchema);
module.exports = Sponsor;
