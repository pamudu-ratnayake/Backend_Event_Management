const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventAddSchema = new Schema({
  event_name: {
    type: String,
    required: true,
  },
  org_name: {
    type: String,
    required: true,
  },
  date_of_the_event: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  event_time: {
    type: String,
    required: true,
  },
  days_occurs: {
    type: Number,
    required: true,
  },
  event_type: {
    type: String,
    required: true,
  },
  organizer_name: {
    type: String,
    required: true,
  },
  cus_id: {
    type: String,
    required: true,
  },
  cus_email: {
    type: String,
    required: true,
  },
  cus_con_number: {
    type: String,
    required: true,
  },
});

const Events = mongoose.model("Events", eventAddSchema);

module.exports = Events;
