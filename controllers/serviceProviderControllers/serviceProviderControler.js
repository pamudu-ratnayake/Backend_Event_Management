let ServiceProviderModel = require("../../models/serviceProviderModels/serviceProvider");

exports.createServiceProvider = (req, res, next) => {
	// Assigning value to variabales
	const servic_provider_Id = req.body.servic_provider_Id;
	const first_name = req.body.first_name;
	const last_name = req.body.last_name;
	const user_name = req.body.user_name;
	const email = req.body.email;
	const mobile = Number(req.body.mobile);
	const telephone = Number(req.body.telephone);
	const address = req.body.address;
	const password = req.body.password;

	const newServiceProvider = new ServiceProviderModel({
		servic_provider_Id,
		first_name,
		last_name,
		user_name,
		email,
		mobile,
		telephone,
		address,
		password,
	});

	newServiceProvider
		.save()
		.then(() => {
			res.json(" Service Provider Created ");
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getAllServicerProviders = (req, res, next) => {
	ServiceProviderModel.find()
		.then((servicerProviders) => {
			res.json(servicerProviders);
		})
		.catch((err) => {
			console.log(err);
		});
};
