let ServiceProviderModel = require("../../models/serviceProviderModels/serviceProvider");

exports.createServiceProvider = (req, res, next) => {
	console.log(`<=== Create Service Provider ====>`);
	// Assigning value to variabales
	const servic_provider_Id = req.body.servic_provider_Id;
	const user_id = req.body.user_id;
	const nic_no = req.body.nic_no;
	const first_name = req.body.first_name;
	const last_name = req.body.last_name;
	const user_name = req.body.user_name;
	const email = req.body.email;
	const mobile = Number(req.body.mobile);
	const telephone = Number(req.body.telephone);
	const address = req.body.address;
	const prof_img =
		"http://localhost:8080/public/uploads/" + req.file.originalname;
	const company_id = req.body.company_id;

	const newServiceProvider = new ServiceProviderModel({
		servic_provider_Id,
		user_id,
		nic_no,
		first_name,
		last_name,
		user_name,
		email,
		mobile,
		telephone,
		address,
		prof_img,
		company_id,
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

// Update Servicer Provider
exports.updateServiceProvider = async (req, res) => {
	console.log(`<=== Update Servicer Provider ====>`);
	let id = req.params.id;
	const {
		servic_provider_Id,
		user_id,
		nic_no,
		first_name,
		last_name,
		user_name,
		email,
		mobile,
		telephone,
		address,

		company_id,
	} = req.body;

	const prof_img =
		"http://localhost:8080/public/uploads/" + req.file.originalname;

	const serviceProviderUpdate = {
		id,
		servic_provider_Id,
		user_id,
		nic_no,
		first_name,
		last_name,
		user_name,
		email,
		mobile,
		telephone,
		address,
		prof_img,
		company_id,
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

exports.getServiceProviderByUserId = async (req, res) => {
	console.log(`<=== Get Servicer Provider By UserID ====>`);

	let id = req.params.id;

	await ServiceProviderModel.findOne({
		user_id: id,
	})
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

exports.updateReview = async (req, res) => {
  console.log(`<=== Update Servicer Provider Review ====>`);
  let id = req.params.id;
  const review_rate = req.body.review_rate;

  const update = await ServiceProviderModel.findByIdAndUpdate(id, {$push:{review_rate: review_rate}})
    .then(() => {
      res.status(200).send({ status: "Service Provider Rating Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
  }
