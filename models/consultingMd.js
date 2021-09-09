const mongoose = require("mongoose");

// Consulting model class

const ConsultingSchema = new mongoose.Schema({
  issue: {
    type: String,
    require: true,
  },
  eventID: {
    type: String,
    require: true,
  },
  answer1: {
    type: String,
    // required: true,
  },
  answer2: {
    type: String,
    // required: true,
  },
  answer3: {
    type: String,
    // required: true,
  },
  answer4: {
    type: String,
    // required: true,
  },
  answer5: {
    type: String,
    // required: true,
  },
  answer6: {
    type: String,
    // required: true,
  }
});

const Consulting = mongoose.model("Consulting", ConsultingSchema);
module.exports = Consulting;
