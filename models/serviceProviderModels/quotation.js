const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema({
	event_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	date_from: {
		type: String,
		// required: true,
	},
	date_to: {
		type: String,
		// required: true,
	},
	quotation_details: [
		{
			item_name: {
				type: String,
				// required: true,
			},
			quantity: {
				type: Number,
				// required: true,
			},
			unit_price: {
				type: Number,
				// required: true,
			},
		},
	],
	terms: {
		type: String,
	},
	approve: {
		type: Boolean,
		default: false,
	},
});

const Company = mongoose.model("company", companySchema);

module.exports = Company;
