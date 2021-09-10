const router = require("express").Router();
const sponsorController = require("../controllers/consultingController");

router.post("/addIssue", sponsorController.consultingPost);

router.get("/getIssues", sponsorController.consultingsGet);

router.put("/updateIssue/:id", sponsorController.consultingUpdate);

router.delete("/deleteIssue/:id", sponsorController.consultingDelete);

router.get("/getIssue/:id", sponsorController.consultingGet);

module.exports = router;