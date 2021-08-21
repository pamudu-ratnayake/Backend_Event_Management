let Company = require("../../models/serviceProviderModels/company");

exports.createCompany = async (req, res, next) => {
	console.log(`<=== Create Company  ====>`);
	// Assigning value to variabales
	const company_Id = req.body.company_Id;
	const company_name = req.body.company_name;
	const service_provider_type = req.body.service_provider_type;
	const details = req.body.details;
	const file = req.body.file;

	const newCompany = new Company({
		company_Id,
		company_name,
		service_provider_type,
		details,
		file,
	});

	await newCompany
		.save()
		.then((company) => {
			console.log(company);
			res.json(" Service Provider Created ");
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getAllCompanies = (req, res, next) => {
	console.log(`<=== Get All Companies ====>`);
	Company.find()
		.then((companies) => {
			res.json(companies);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.updateServiceProvider = async (req, res) => {
	console.log(`<=== Update Servicer Provider ====>`);
	let id = req.params.id;
	const { company_Id, company_name, service_provider_type, details, file } =
		req.body;

	const companyUpdate = {
		id,
		company_Id,
		company_name,
		service_provider_type,
		details,
		file,
	};

	const update = await Company.findByIdAndUpdate(id, companyUpdate)
		.then(() => {
			res.status(200).send({ status: "Service Provider Updated!" });
		})
		.catch((err) => {
			res.status(500).send({ status: "Error! Cannot Update!" });
			console.log(err.message);
		});
};

exports.deleteServiceProvider = async (req, res) => {
	console.log(`<=== Delete Servicer Provider ====>`);
	let id = req.params.id;

	await Company.findByIdAndDelete(id)
		.then(() => {
			res.status(200).send({ status: "Service Provider Deleted!" });
		})
		.catch((err) => {
			res.status(500).send({ status: "Error! Cannot Delete!" });
			console.log(err.message);
		});
};

exports.getServiceProvider = async (req, res) => {
	console.log(`<=== Get Servicer Provider ====>`);

	let id = req.params.id;

	await Company.findById(id)
		.then((company) => {
			res.json(company);
		})
		.catch((err) => {
			console.log(err);
		});
};
