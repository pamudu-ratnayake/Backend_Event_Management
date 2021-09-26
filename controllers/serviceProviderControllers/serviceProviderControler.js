let ServiceProviderModel = require("../../models/serviceProviderModels/serviceProvider");

exports.createServiceProvider = (req, res, next) => {
	console.log(`<=== Create Service Provider ====>`);
	// Assigning value to variabales
	const servic_provider_Id = req.body.servic_provider_Id;
	const nic_no = req.body.nic_no;
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
		nic_no,
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
	console.log(`<=== Get All Servicer Providers ====>`);
	ServiceProviderModel.find()
		.then((servicerProviders) => {
			res.json(servicerProviders);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.updateServiceProvider = async (req, res) => {
	console.log(`<=== Update Servicer Provider ====>`);
	let id = req.params.id;
	const {
		servic_provider_Id,
		nic_no,
		first_name,
		last_name,
		user_name,
		email,
		mobile,
		telephone,
		address,
		password,
	} = req.body;

	const serviceProviderUpdate = {
		id,
		servic_provider_Id,
		nic_no,
		first_name,
		last_name,
		user_name,
		email,
		mobile,
		telephone,
		address,
		password,
	};

	const update = await ServiceProviderModel.findByIdAndUpdate(
		id,
		serviceProviderUpdate
	)
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

	await ServiceProviderModel.findByIdAndDelete(id)
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

	await ServiceProviderModel.findById(id)
		.then((serviceProvider) => {
			res.json(serviceProvider);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getAllServicerProviderOne = (req, res, next) => {
	console.log(`<=== Get All Servicer Providers ====>`);
	ServiceProviderModel.find()
		.sort({ _id: -1 })
		.limit(1)
		.then((serviceProvider) => {
			res.json(serviceProvider);
		})
		.catch((err) => {
			console.log(err);
		});
};
