const router = require("express").Router();
const sponsorController = require("../controllers/sponsorConroller");

router.post("/add", sponsorController.sponsorPost);



module.exports = router;
