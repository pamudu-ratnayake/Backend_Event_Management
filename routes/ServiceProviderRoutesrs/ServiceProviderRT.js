const router = require("express").Router();
let ServiceProviderController = require("../../controllers/serviceProviderControllers/serviceProviderControler");

router.post("/create", ServiceProviderController.createServiceProvider);
router.get("/", ServiceProviderController.getAllServicerProviders);

module.exports = router;
