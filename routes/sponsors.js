const router = require("express").Router();
const Sponsor = require("../models/sponsor");
let sponsor = require("../models/sponsor");

router.route("/add").post((req,res)=>{
    const sponsorID = req.body.sponsorID;
    const companyName = req.body.companyName;
    const sponsorType = req.body.sponsorType;
    const phoneNumber = Number(req.body.phoneNumber);
    const email = req.body.email;

    const newSponsor = new Sponsor({
        sponsorID,
        companyName,
        sponsorType,
        phoneNumber,
        email
    })

    newSponsor.save().then(()=>{
        res.json("Sponsor Added")
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;