const router = require("express").Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) =>  {
    callback(null, "../../../../Event Management/Backend-Event-Management/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

const Controller = require("../../controllers/Ad&BoostingControllers/Controller");

//routes--------------
router.post("/addadvertisement", Controller.addAdvertisement);

router.get("/get/:id", Controller.viewoneAdvertisement);

router.put("/boostadvertisement/:id", Controller.boostAdvertisement);

router.get("/list", Controller.viewAdvertisement);

router.put("/updateadvertisement/:id", Controller.updateAdvertisement);

router.delete("/deleteadvertisement/:id", Controller.deleteAdvertisement);

module.exports = router;



