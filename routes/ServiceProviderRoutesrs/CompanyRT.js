const router = require("express").Router();
let CompanyController = require("../../controllers/serviceProviderControllers/companyController");

router.post("/create", CompanyController.createCompany);
router.get("/", CompanyController.getAllCompanies);

module.exports = router;
