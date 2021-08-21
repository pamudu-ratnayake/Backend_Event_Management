const router = require("express").Router();
let ServiceProviderController = require("../../controllers/serviceProviderControllers/serviceProviderControler");

router.post("/create", ServiceProviderController.createServiceProvider);
router.get("/", ServiceProviderController.getAllServicerProviders);
router.put("/update/:id", ServiceProviderController.updateServiceProvider);
router.delete("/delete/:id", ServiceProviderController.deleteServiceProvider);
router.get("/get/:id", ServiceProviderController.getServiceProvider);

module.exports = router;
