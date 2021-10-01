const router = require("express").Router();
let ServiceProviderController = require("../../controllers/serviceProviderControllers/serviceProviderControler");

const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./public/uploads/");
	},
	filename: (req, file, callback) => {
		callback(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

router.post("/create", ServiceProviderController.createServiceProvider);
router.get("/", ServiceProviderController.getAllServicerProviders);
router.put(
	"/update/:id",
	upload.single("file"),
	ServiceProviderController.updateServiceProvider
);
router.delete("/delete/:id", ServiceProviderController.deleteServiceProvider);
router.get("/get/:id", ServiceProviderController.getServiceProvider);
router.get("/getOne", ServiceProviderController.getAllServicerProviderOne);
router.get(
	"/getByUser/:id",
	ServiceProviderController.getServiceProviderByUserId
);
router.post("/review-update/:id", ServiceProviderController.updateReview);

module.exports = router;
