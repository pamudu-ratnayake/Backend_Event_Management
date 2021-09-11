const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
	company_Id: {
		type: String,
		// required: true,
	},
	company_name: {
		type: String,
	},
	service_provider_type: {
		type: String,
	},
	details: {
		type: String,
	},
	file: {
		type: String,
	},
});

const Company = mongoose.model("company", companySchema);

// Export Modal
module.exports = Company;
