const Company = require("../../../models/serviceProviderModels/company");
const ServiceProviderModel = require("../../../models/serviceProviderModels/serviceProvider");

class CreateUtility {
	async createUtilities(result, reqBody) {
		console.log("<====== Create Utility =============>");

		let dbUser = await ServiceProviderModel.find().sort({ _id: -1 }).limit(1);

		let userCodeString = "SP#";

		if (dbUser && dbUser.length !== 0) {
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
			first_name: reqBody.firstName,
			last_name: reqBody.lastName,
			user_name: "",
			email: reqBody.email,
			mobile: "",
			telephone: null,
			address: "",
			company_id: null,
			service_type: reqBody.service_type,
		});

		const newComany = new Company({
			service_provider_type: reqBody.service_type,
		});

		const dbCompany = await newComany.save();

		newServiceProvider.company_id = dbCompany._id;
		newServiceProvider
			.save()
			.then(() => {
				console.log(" Service Provider Created ");
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

module.exports = new CreateUtility();
