const router = require("express").Router();
const sponsorController = require("../../controllers/Consulting&SponsorsControllers/sponsorConroller");

router.post("/addSponsors", sponsorController.sponsorPost);

router.get("/getSponsors", sponsorController.sponsorsGet);

router.put("/updateSponsor/:id", sponsorController.sponsorUpdate);

router.delete("/deleteSponsor/:id", sponsorController.sponsorDelete);

router.get("/getSponsor/:id", sponsorController.sponsorGet);

module.exports = router;
