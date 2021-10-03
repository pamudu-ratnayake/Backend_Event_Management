const router = require("express").Router();
const auth = require("../../middleware/auth")

const PaymentController = require("../../controllers/PaymentHandling/PaymentController");

router.post("/addpayment",auth, PaymentController.addPayment);
router.get("/paidlist",auth, PaymentController.viewPayment);
router.get("/get/:id",auth, PaymentController.viewonePayment);
router.get("/userpayments",auth, PaymentController.viewUserPayment);


module.exports = router;