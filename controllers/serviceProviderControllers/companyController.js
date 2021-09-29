let Company = require("../../models/serviceProviderModels/company");

exports.createCompany = async (req, res, next) => {
	console.log(`<=== Create Company  ====>`);
	// Assigning value to variabales
	const service_provider_id = req.body.service_provider_id;
	const company_Id = req.body.company_Id;
	const company_name = req.body.company_name;
	const service_provider_type = req.body.service_provider_type;
	const details = req.body.details;
	const file = req.body.file;

	// Create Company
	const newCompany = new Company({
		service_provider_id,
		company_Id,
		company_name,
		service_provider_type,
		details,
		file,
	});

	await newCompany
		.save()
		.then((company) => {
			res.json(company);
		})
		.catch((err) => {
			console.log(err);
		});
};

// Get All Companies
exports.getAllCompanies = (req, res, next) => {
	console.log(`<=== Get All Companies ====>`);
	Company.find()
		.sort({ _id: -1 })
		.limit(1)
		.then((company) => {
			res.json(company);
		})
		.catch((err) => {
			console.log(err);
		});
};

// Update company
exports.updateCompany = async (req, res) => {
	console.log(`<=== Update Company ====>`);
	let id = req.params.id;
	const {
		service_provider_id,
		company_name,
		service_provider_type,
		details,
		file,
	} = req.body;

	const companyUpdate = {
		id,
		service_provider_id,
		company_name,
		service_provider_type,
		details,
		file,
	};

	const update = await Company.findByIdAndUpdate(id, companyUpdate)
		.then(() => {
			res.status(200).send({ status: "Company Updated!" });
		})
		.catch((err) => {
			res.status(500).send({ status: "Error! Cannot Update!" });
			console.log(err.message);
		});
};

// Delete Company
exports.deleteCompany = async (req, res) => {
	console.log(`<=== Delete Company ====>`);
	let id = req.params.id;

	await Company.findByIdAndDelete(id)
		.then(() => {
			res.status(200).send({ status: "Company Deleted!" });
		})
		.catch((err) => {
			res.status(500).send({ status: "Error! Cannot Delete!" });
			console.log(err.message);
		});
};

// Get Company by ID
exports.getCompany = async (req, res) => {
	console.log(`<=== Get Company ====>`);

	let id = req.params.id;
	// Get company by ID
	await Company.findById(id)
		.then((company) => {
			res.json(company);
		})
		.catch((err) => {
			console.log(err);
		});
};
