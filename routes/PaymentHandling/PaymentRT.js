const router = require("express").Router();
const auth = require("../../middleware/auth")

const PaymentController = require("../../controllers/PaymentHandling/PaymentController");

router.post("/addpayment",auth, PaymentController.addPayment);
router.get("/paidlist", PaymentController.viewPayment);
router.get("/get/:id", PaymentController.viewonePayment);
router.get("/userpayments",auth, PaymentController.viewUserPayment);


module.exports = router;