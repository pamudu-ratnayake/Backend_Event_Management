const router = require("express").Router();
let QuotationController = require("../../controllers/serviceProviderControllers/QuotationController");

const auth = require("../../middleware/auth");

// Create Quotation
router.post("/create", QuotationController.createQuotation);
// Get all Quotation
router.get("/get-quotations/:event_id", QuotationController.getAllQuotation);
//Get accpeted quotation
router.get(
	"/accepted-quotations/:event_id", auth,
	QuotationController.getAcceptedQuotation
);
// Delete Comapny
router.delete("/delete/:id", QuotationController.deleteQuotation);
// Get  Quotation by Id
router.get("/get/:id", QuotationController.getQuotation);
// Get  Quotation by Id
router.get(
	"/quotation-by-provider/:id",
	QuotationController.getQuotationByProvider
);

router.put("/update/status/:quotation_id", QuotationController.updateQuotation);

module.exports = router;
