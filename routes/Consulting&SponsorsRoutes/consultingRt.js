const router = require("express").Router();
const consultingController = require("../../controllers/Consulting&SponsorsControllers/consultingController");

const auth = require("../../middleware/auth");

router.post("/addIssue", auth, consultingController.consultingPost);

router.get("/getIssues", auth, consultingController.consultingsGet);

// router.put("/updateIssue/:id", auth, consultingController.consultingUpdate);

router.delete("/deleteIssue/:id", auth, consultingController.consultingDelete);

router.get("/getIssue/:id", auth, consultingController.consultingGet);

router.post("/addAnswer/:id", auth, consultingController.answerUpdate);

router.get("/getByevent/:id", auth, consultingController.getByeventID);

module.exports = router;