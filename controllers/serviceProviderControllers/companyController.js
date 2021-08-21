let Company = require("../../models/serviceProviderModels/company");

exports.createCompany = (req, res, next) => {
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

	newCompany
		.save()
		.then(() => {
			res.json(" Service Provider Created ");
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getAllCompanies = (req, res, next) => {
	Company.find()
		.then((companies) => {
			res.json(companies);
		})
		.catch((err) => {
			console.log(err);
		});
};
