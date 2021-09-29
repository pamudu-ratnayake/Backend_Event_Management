const router = require("express").Router();
let CompanyController = require("../../controllers/serviceProviderControllers/companyController");

router.post("/create", CompanyController.createCompany);
router.get("/", CompanyController.getAllCompanies);
router.put("/update/:id", CompanyController.updateCompany);
router.delete("/delete/:id", CompanyController.deleteCompany);
router.get("/get/:id", CompanyController.getCompany);

module.exports = router;
