const router = require("express").Router();

const Authenticate = require("../../Authentication");
let PatientController = require("../../controllers/patientcontroller/patientControler");

router.post("", Authenticate, PatientController.create);
router.delete("/:id", PatientController.delete);
router.get("/:id", Authenticate, PatientController.getOne);
router.get("", Authenticate, PatientController.getAll);

module.exports = router;
