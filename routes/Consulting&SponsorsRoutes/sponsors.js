const router = require("express").Router();
const sponsorController = require("../../controllers/Consulting&SponsorsControllers/sponsorConroller");

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
router.post("/addSponsors",upload.single("file"), sponsorController.sponsorPost);

router.get("/getSponsors", sponsorController.sponsorsGet);

router.put("/updateSponsor/:id", sponsorController.sponsorUpdate);

router.delete("/deleteSponsor/:id", sponsorController.sponsorDelete);

router.get("/getSponsor/:id", sponsorController.sponsorGet);

module.exports = router;