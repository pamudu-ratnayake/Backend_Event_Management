const requestedSponsor = require("../../models/Consulting&SponsorsModels/requested_SponsorsMd");

// sponsor controller

const requestedSponsorPost = (req, res, next) => {
  const event_id = req.body.event_id;
  const sender_name = req.body.sender_name;
  const sponsorEmail = req.body.sponsorEmail;
  const companyName = req.body.companyName;
  const cus_email = req.body.cus_email;
  const rqst = req.body.rqst;

  const newRequestedSponsor = new requestedSponsor({
    event_id,
    sender_name,
    sponsorEmail,
    companyName,
    cus_email,
    rqst
  });

  newRequestedSponsor
    .save()
    .then(() => {
      res.json("Requested Sponsor Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const requestedSponsorsGet = (req, res, next) => {
  requestedSponsor
      .find()
      .then((requestedSponsor) => {
        res.json(requestedSponsor);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const requestedSponsorsByEventIdGet = (req, res, next) => {
  let e_ID = req.params.event_id;

  const reqSponsorInfor = requestedSponsor.findOne(e_ID)
  .then((reqSponsorData) => {
    res.json(reqSponsorData).status(200).send({status: "User fetched", user: reqSponsorInfor})
  }).catch(() => {
    console.log(err.message);
    res.status(500).send({status: "Error with get user", error: err.message})
  })
};

  module.exports = {
    requestedSponsorPost,
    requestedSponsorsGet,
    requestedSponsorsByEventIdGet
  };