const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
  event_id: {
    type: String,
    // require: false,
  },
  sender_name: {
    type: String,
    // require: false,
  },
  sponsorEmail: {
    type: String,
    // required: false,
  },
  companyName: {
    type: String,
    // required: false,
  },
  cus_email: {
    type: String,
    // required: false,
  },
  rqst: {
    type: String,
    // required: false,
  },
});

const Sponsor = mongoose.model("RequestedSponsors", SponsorSchema);
module.exports = Sponsor;
