const router = require("express").Router();
const auth = require("../../middleware/auth")
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) =>  {
    callback(null, "./public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

const Controller = require("../../controllers/Ad&BoostingControllers/Controller");

//routes--------------
router.post("/addadvertisement",auth,upload.single("file"), Controller.addAdvertisement);

router.get("/get/:id", Controller.viewoneAdvertisement);

router.put("/boostadvertisement/:id", Controller.boostAdvertisement);

router.get("/list", Controller.viewAdvertisement);

router.get("/provider-adds",auth, Controller.viewUserAdvertisement);

router.put("/updateadvertisement/:id", Controller.updateAdvertisement);

router.delete("/deleteadvertisement/:id", Controller.deleteAdvertisement);


module.exports = router;



