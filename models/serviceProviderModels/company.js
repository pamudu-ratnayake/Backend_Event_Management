const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
	company_Id: {
		type: String,
		// required: true,
	},
	// company_name: {
	// 	type: String,
	// 	// required: true,
	// },
	service_provider_type: {
		type: String,
		// required: true,
	},
	details: {
		type: String,
	},
	file: {
		type: String,
		// required: true,
	},
});

const Company = mongoose.model("company", companySchema);

module.exports = Company;
