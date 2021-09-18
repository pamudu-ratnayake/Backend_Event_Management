const router = require("express").Router();
let CompanyController = require("../../controllers/serviceProviderControllers/companyController");

// Create Company
router.post("/create", CompanyController.createCompany);
// Get all Company
router.get("/", CompanyController.getAllCompanies);
// Update Comapany
router.put("/update/:id", CompanyController.createCompany);
// Delete Comapny
router.delete("/delete/:id", CompanyController.deleteServiceProvider);
// Get  Company by Id
router.get("/get/:id", CompanyController.getAllCompanies);

module.exports = router;
