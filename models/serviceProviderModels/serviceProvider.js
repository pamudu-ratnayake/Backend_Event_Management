const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
	servic_provider_Id: {
		type: String,
		// required: true,
	},
	user_id: {
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
		default: 0,
	},
	telephone: {
		type: String,
	},
	address: {
		type: String,
	},
	company_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Company",
	},
	service_type: {
		type: String,
	},
	prof_img: {
		type: String,
		required: false,
	},
	review_rate: [
		{
			rate: {
				type: Number,
				// required: true,
			},
			review: {
				type: String,
				// required: true,
			},
		},
	],
});

const ServiceProvider = mongoose.model(
	"ServiceProvider",
	serviceProviderSchema
);

module.exports = ServiceProvider;
