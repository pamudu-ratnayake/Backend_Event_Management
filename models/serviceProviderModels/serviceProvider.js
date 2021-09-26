const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
	servic_provider_Id: {
		type: String,
		// required: true,
	},
	nic_no: {
		type: String,
		// required: true,
	},
	first_name: {
		type: String,
		// required: true,
	},
	last_name: {
		type: String,
		// required: true,
	},
	user_name: {
		type: String,
	},
	email: {
		type: String,
		// required: true,
	},
	mobile: {
		type: Number,
		// required: true,
	},
	telephone: {
		type: String,
	},
	address: {
		type: String,
	},
	password: {
		type: String,
		// required: true,
	},
});

const ServiceProvider = mongoose.model(
	"ServiceProvider",
	serviceProviderSchema
);

module.exports = ServiceProvider;
