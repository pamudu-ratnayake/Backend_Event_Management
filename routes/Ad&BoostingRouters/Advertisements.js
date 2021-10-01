const router = require("express").Router();

const Controller = require("../../controllers/Ad&BoostingControllers/Controller");

//routes--------------
router.post("/addadvertisement", Controller.addAdvertisement);

router.get("/get/:id", Controller.viewoneAdvertisement);

router.get("/list", Controller.viewAdvertisement);

router.put("/updateadvertisement/:id", Controller.updateAdvertisement);

router.delete("/deleteadvertisement/:id", Controller.deleteAdvertisement);


module.exports = router;
