const router = require("express").Router();
let ServiceProviderController = require("../../controllers/serviceProviderControllers/serviceProviderControler");

// create Service Provider
router.post("/create", ServiceProviderController.createServiceProvider);
// get AllServicer Providers
router.get("/", ServiceProviderController.getAllServicerProviders);
// update Service Provider
router.put("/update/:id", ServiceProviderController.updateServiceProvider);
// delete Service Provider
router.delete("/delete/:id", ServiceProviderController.deleteServiceProvider);
// get Service Provider
router.get("/get/:id", ServiceProviderController.getServiceProvider);
// getAll Servicer Provider One
router.get("/getOne", ServiceProviderController.getAllServicerProviderOne);

module.exports = router;
