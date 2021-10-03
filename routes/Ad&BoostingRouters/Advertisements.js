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

router.get("/get/:id",auth, Controller.viewoneAdvertisement);

router.put("/boostadvertisement/:id", auth,Controller.boostAdvertisement);

router.get("/list",auth, Controller.viewAdvertisement);

router.get("/provider-adds",auth, Controller.viewUserAdvertisement);

router.put("/updateadvertisement/:id",auth, Controller.updateAdvertisement);

router.delete("/deleteadvertisement/:id", auth,Controller.deleteAdvertisement);


module.exports = router;



