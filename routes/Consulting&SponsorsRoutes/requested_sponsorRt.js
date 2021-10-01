const router = require("express").Router();
const requestedSponsorController = require("../../controllers/Consulting&SponsorsControllers/Requested_SponsorCt");

const auth = require("../../middleware/auth");

router.post("/addRequestedSponsors", auth, requestedSponsorController.requestedSponsorPost);

router.get("/getRequestedSponsors", auth, requestedSponsorController.requestedSponsorsGet);

router.get("/getRequestedSponsorsBy/:id", auth, requestedSponsorController.requestedSponsorsByEventIdGet);

module.exports = router;