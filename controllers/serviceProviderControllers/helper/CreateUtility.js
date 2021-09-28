const Company = require("../../../models/serviceProviderModels/company");
const ServiceProviderModel = require("../../../models/serviceProviderModels");

const createUtility = () => {
	console.log("<====== Create Utility");
	if (req.body.user_type == "service provider") {
		let dbUser = await ServiceProviderModel.find().sort({ _id: -1 }).limit(1);
		console.log("dbUser : ", dbUser);
		let userCodeString = "SP#";

		if (dbUser.length !== 0) {
			let userCode = dbUser[0].servic_provider_Id; // Assinging student code to new variable

			let userCodeInt = Number(userCode.slice(3, 11)); // Convert string student code to Number
			userCodeInt += 1;

			let stringCountUser = userCodeInt.toString(); // Number convert to String

			for (let index = 0; index < 8 - stringCountUser.length; index++) {
				userCodeString = userCodeString + 0; // Adding remaning 0s
			}
			userCodeString = userCodeString + userCodeInt;
		} else {
			userCodeString = "SP#00000001";
		}

		const newServiceProvider = new ServiceProviderModel({
			servic_provider_Id: userCodeString,
			user_id: result._id,
			nic_no: null,
			first_name: firstName,
			last_name: lastName,
			user_name: "",
			email: email,
			mobile: "",
			telephone: null,
			address: "",
			company_id: null,
		});

		const newComany = new Company({
			service_provider_type: req.body.service_type,
		});

		await newComany
			.save()
			.then(() => {
				res.json(" Company Created ");
			})
			.then((company) => {
				newServiceProvider.company_id = company._id;
				newServiceProvider.save().then(() => {
					res.json(" Service Provider Created ");
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

module.exports = createUtility;
