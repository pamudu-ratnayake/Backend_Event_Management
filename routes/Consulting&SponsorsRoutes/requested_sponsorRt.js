const router = require("express").Router();
const requestedSponsorController = require("../../controllers/Consulting&SponsorsControllers/Requested_SponsorCt");

router.post("/addRequestedSponsors", requestedSponsorController.requestedSponsorPost);

router.get("/getRequestedSponsors", requestedSponsorController.requestedSponsorsGet);

router.get("/getRequestedSponsorsBy/:id", requestedSponsorController.requestedSponsorsByEventIdGet);

module.exports = router;