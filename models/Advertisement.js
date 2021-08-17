const mongoose = require('mongoose');

const AdvertisementSchema = new mongoose.Schema({
SPName:{
type: String,
require: true,
},
SPID: {
type: String,
required: true,
},
AID: {
type: String,
required: true,
},
CEmail: {
type: String,
required: true,
},
ContactNummber: {
type: Number,
required: true,
},
SType: {
type: String,
required: true,
},
AddDuration: {
type: String,
required: true,
    },
PType: {
type: String,
required: true,
            },
});

const Advertisement = mongoose.model("AdvertisementData", AdvertisementSchema)
module.exports = Advertisement