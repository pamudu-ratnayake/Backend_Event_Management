const router = require("express").Router();
const auth = require("../../middleware/auth")

const PaymentController = require("../../controllers/PaymentHandling/PaymentController");

router.post("/addpayment",auth, PaymentController.addPayment);

module.exports = router;