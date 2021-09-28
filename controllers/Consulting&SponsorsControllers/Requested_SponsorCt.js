const requestedSponsor = require("../../models/Consulting&SponsorsModels/requested_SponsorsMd");

// sponsor controller

const requestedSponsorPost = (req, res, next) => {
  const event_id = req.body.event_id;
  const sender_name = req.body.sender_name;
  const sponsorEmail = req.body.sponsorEmail;
  const companyName = req.body.companyName;
  const cus_email = req.body.cus_email;
  const reqDate = req.body.reqDate;


  const newRequestedSponsor = new requestedSponsor({
    event_id,
    sender_name,
    sponsorEmail,
    companyName,
    cus_email,
    reqDate
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
    sponsor
      .find()
      .then((sponsors) => {
        res.json(sponsors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  module.exports = {
    requestedSponsorPost,
    requestedSponsorsGet,
  };