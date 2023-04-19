const router = require("express").Router();
const Authenticate = require("../../Authentication");
let Doctorcontroller = require("../../controllers/doctorcontroller/doctorControler");

router.post("", Authenticate, Doctorcontroller.create);
router.get("/:id", Authenticate, Doctorcontroller.getOne);
router.get("/", Authenticate, Doctorcontroller.getAll);

module.exports = router;
