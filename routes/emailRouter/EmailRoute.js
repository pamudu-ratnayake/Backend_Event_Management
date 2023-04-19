const router = require("express").Router();
const Authenticate = require("../../Authentication");
let EmailController = require("../../controllers/emailcontroller/emialControler");

router.post("", EmailController.create);
router.put("/:id", Authenticate, EmailController.update);
router.get("", Authenticate, EmailController.getAll);
router.get("/pdfs", Authenticate, EmailController.getPdfs);

module.exports = router;
