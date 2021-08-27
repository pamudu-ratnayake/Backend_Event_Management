const sponsor = require("../models/sponsor");

const sponsorPost = (req, res, next) => {
  const regNo = req.body.regNo;
  const companyName = req.body.companyName;
  const sponsorType = req.body.sponsorType;
  const SponsorPhoneNo = Number(req.body.SponsorPhoneNo);
  const sponsorEmail = req.body.sponsorEmail;
  const sponsorAddress = req.body.sponsorAddress;

  const newSponsor = new sponsor({
    regNo,
    companyName,
    sponsorType,
    SponsorPhoneNo,
    sponsorEmail,
    sponsorAddress,
  });

  newSponsor
    .save()
    .then(() => {
      res.json("Sponsor Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const sponsorsGet = (req, res, next) => {
  sponsor
    .find()
    .then((sponsors) => {
      res.json(sponsors);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sponsorUpdate = (req, res, next) => {

  let ID =  req.params.id;
  const {regNo, companyName, sponsorType, SponsorPhoneNo, sponsorEmail,sponsorAddress} = req.body;

  const updateSponsor = {
    regNo,
    companyName,
    sponsorType,
    SponsorPhoneNo,
    sponsorEmail,
    sponsorAddress
  }

  const update = sponsor.findByIdAndUpdate(ID, updateSponsor).then(()=>{
  res.status(200).send({status: "User Updated", user: update})
}).catch((err) => {
  console.log(err);
  res.satatus(500).send({status: "Error with updating data"});
})
};

const sponsorDelete = (req, res, next) => {
  let ID = req.params.id;
  sponsor.findByIdAndDelete(ID)
  .then(() => {
    res.status(200).send({status: "Sponsor Deleted"});
  }).catch((err)=> {
    console.log(err.message);
    res.status(500).send({status: "Error with delete user", erroe: err.message})
  })
}

const sponsorGet = (req, res, next) => {
  let ID = req.params.id;

  const sponsorInfor = sponsor.findById(ID)
  .then((sponsorData) => {
    res.json(sponsorData).status(200).send({status: "User fetched", user: sponsorInfor})
  }).catch(() => {
    console.log(err.message);
    res.status(500).send({status: "Error with get user", error: err.message})
  })
}


module.exports = {
  sponsorPost,
  sponsorsGet,
  sponsorUpdate,
  sponsorDelete,
  sponsorGet
};
