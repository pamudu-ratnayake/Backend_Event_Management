const router = require("express").Router();
const consultingController = require("../../controllers/Consulting&SponsorsControllers/consultingController");

router.post("/addIssue", consultingController.consultingPost);

router.get("/getIssues", consultingController.consultingsGet);

router.put("/updateIssue/:id", consultingController.consultingUpdate);

router.delete("/deleteIssue/:id", consultingController.consultingDelete);

router.get("/getIssue/:id", consultingController.consultingGet);

router.post("/addAnswer/:id", consultingController.answerUpdate);

module.exports = router;