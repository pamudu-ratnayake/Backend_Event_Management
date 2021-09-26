const router = require("express").Router();
let QuotationController = require("../../controllers/serviceProviderControllers/QuotationController");

// Create Quotation
router.post("/create", QuotationController.createQuotation);
// Get all Quotation
router.get("/", QuotationController.getAllQuotation);
// Delete Comapny
router.delete("/delete/:id", QuotationController.deleteQuotation);
// Get  Quotation by Id
router.get("/get/:id", QuotationController.getQuotation);

module.exports = router;
