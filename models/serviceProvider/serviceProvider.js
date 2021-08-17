const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
	servicProviderID: {
		type: String,
		// required: true,
	},
	firstName: {
		type: String,
		// required: true,
	},
	lastName: {
		type: String,
		// required: true,
	},
	userName: {
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
		type: Number,
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
	"serviceProvider",
	serviceProviderSchema
);

module.exports = ServiceProvider;
