let Quotation = require("../../models/serviceProviderModels/quotation");
const ServiceProvider = require("../../models/serviceProviderModels/serviceProvider");

exports.createQuotation = async (req, res, next) => {
	console.log(`<=== Create Quotation  ====>`);
	// Assigning value to variabales
	const event_id = req.body.event_id;
	const provider_id = req.body.provider_id;
	const date_from = req.body.date_from;
	const date_to = req.body.date_to;
	const quotation_details = req.body.quotation_details;
	const terms = req.body.terms;
	const approve = req.body.approve;

	// Create new Quotation---
	const newQuotation = new Quotation({
		event_id,
		provider_id,
		date_from,
		date_to,
		quotation_details,
		terms,
		approve,
	});

	// New Quotation save in Database
	await newQuotation
		.save()
		.then((quotation) => {
			res.json(quotation);
		})
		.catch((err) => {
			console.log(err);
		});
};

// Get All Quotation
exports.getAllQuotation = (req, res, next) => {
	console.log(`<=== Get All Quotation ====>`);
	let event_id = req.params.event_id;
	Quotation.find({ event_id: { $in: event_id }, approve: { $in: false } })
		.populate("provider_id")
		.then((quotation) => {
			res.json(quotation);
		})
		.catch((err) => {
			console.log(err);
		});
};

// Get Accepted Quotation
exports.getAcceptedQuotation = (req, res, next) => {
	console.log(`<=== Get Accepted Quotation ====>`);
	let event_id = req.params.event_id;
	Quotation.find({ event_id: { $in: event_id }, approve: { $in: true } })
		.populate("provider_id")
		.then((quotation) => {
			res.json(quotation);
		})
		.catch((err) => {
			console.log(err);
		});
};

// Get Quotation By provider Id ppulate event
exports.getQuotationByProvider = (req, res, next) => {
	console.log(`<=== Get Quotation By Provider Id ====>`);

	let user_id = req.params.id;
	ServiceProvider.findOne({ user_id: user_id })
		.then((serviceProvider) => {
			Quotation.find({
				provider_id: serviceProvider._id,
			})
				.populate("event_id")
				.then((quotation) => {
					res.json(quotation);
				});
		})

		.catch((err) => {
			console.log(err);
		});
};

// Delete Servicer Provider
exports.deleteQuotation = async (req, res) => {
	console.log(`<=== Delete Servicer Provider ====>`);
	let id = req.params.id;

	await Quotation.findByIdAndDelete(id)
		.then(() => {
			res.status(200).send({ status: "Quotation Deleted!" });
		})
		.catch((err) => {
			res.status(500).send({ status: "Error! Cannot Delete!" });
			console.log(err.message);
		});
};

// Get Quotation By Id
exports.getQuotation = async (req, res) => {
	console.log(`<=== Get Quotation ====>`);

	let id = req.params.id;

	await Quotation.findById(id)
		.populate("provider_id")
		.then((quotation) => {
			res.json(quotation);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.updateQuotation = async (req, res) => {
	let quotation_id = req.params.quotation_id;
	const { approve } = req.body;

	const quotationUpdate = {
		approve,
	};

	await Quotation.findByIdAndUpdate(quotation_id, quotationUpdate)
		.then(() => {
			res.status(200).send({ status: "Quotation Updated!" });
		})
		.catch((err) => {
			res.status(500).send({ status: "Error! Cannot Update!" });
			console.log(err.message);
		});
};
