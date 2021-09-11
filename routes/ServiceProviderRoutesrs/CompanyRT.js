const router = require("express").Router();
let CompanyController = require("../../controllers/serviceProviderControllers/companyController");

router.post("/create", CompanyController.createCompany);
router.get("/", CompanyController.getAllCompanies);
router.put("/update/:id", CompanyController.createCompany);
router.delete("/delete/:id", CompanyController.deleteServiceProvider);
router.get("/get/:id", CompanyController.getAllCompanies);

module.exports = router;
