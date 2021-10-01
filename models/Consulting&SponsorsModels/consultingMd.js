const mongoose = require("mongoose");

const ConsultingSchema = new mongoose.Schema({
  issue: {
    type: String,
    require: true,
  },
  eventObj: {
    type: Object,
    require: true,
  },
  answers: {
    type: Array,
    // required: true,
  },
});

const Consulting = mongoose.model("Consulting", ConsultingSchema);
module.exports = Consulting;
