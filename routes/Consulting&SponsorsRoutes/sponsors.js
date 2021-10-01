const router = require("express").Router();
const sponsorController = require("../../controllers/Consulting&SponsorsControllers/sponsorConroller");

const auth = require("../../middleware/auth");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) =>  {
    callback(null, "./public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

//Routs
router.post("/addSponsors", auth, upload.single("file"), sponsorController.sponsorPost);

router.get("/getSponsors", auth, sponsorController.sponsorsGet);

router.put("/updateSponsor/:id", auth, sponsorController.sponsorUpdate);

router.delete("/deleteSponsor/:id", auth, sponsorController.sponsorDelete);

router.get("/getSponsor/:id", auth, sponsorController.sponsorGet);

module.exports = router;