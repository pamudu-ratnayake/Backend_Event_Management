const mongoose = require("mongoose");

const ConsultingSchema = new mongoose.Schema({
  issue: {
    type: String,
    require: true,
  },
  eventID: {
    type: String,
    require: true,
  },
  answers: {
    type: Array,
    // required: true,
  },
});

const Consulting = mongoose.model("Consulting", ConsultingSchema);
module.exports = Consulting;
