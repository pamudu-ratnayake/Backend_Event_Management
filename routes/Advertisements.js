const router = require("express").Router();
let Advertisement = require("../models/Advertisement");

router.route("/addadvertisement").post((req, res) => {
  const SPName = req.body.SPName;
  const SPID = req.body.SPID;
  const AID = req.body.AID;
  const CEmail = req.body.CEmail;
  const ContactNummber = Number(req.body.ContactNummber);
  const SType = req.body.SType;
  const AddDuration = req.body.AddDuration;
  const PType = req.body.PType;

  const newAdvertisement = new Advertisement({
    SPName,
    SPID,
    AID,
    CEmail,
    ContactNummber,
    SType,
    AddDuration,
    PType,
  });

  newAdvertisement
    .save()
    .then(() => {
      res.json("Advertisement Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  Advertisement.find()
    .then(() => {
      res.json(advertisement);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
