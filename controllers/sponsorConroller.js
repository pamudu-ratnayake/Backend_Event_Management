const router = require("express").Router();
const sponsor = require("../models/sponsor");
const express = require("express");

const sponsorPost = (req, res, next) => {
  const sponsorID = req.body.sponsorID;
  const companyName = req.body.companyName;
  const sponsorType = req.body.sponsorType;
  const phoneNumber = Number(req.body.phoneNumber);
  const email = req.body.email;

  const newSponsor = new sponsor({
    sponsorID,
    companyName,
    sponsorType,
    phoneNumber,
    email,
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

  let sponsorID =  req.params.id;
  const {companyName, sponsorType, phoneNumber, email} = req.body;

  const updateSponsor = {
    sponsorID,
    companyName,
    sponsorType,
    phoneNumber,
    email
  }

  const update = sponsor.findByIdAndUpdate(sponsorID, updateSponsor).then(()=>{
  res.status(200).send({status: "User Updated", user: update})
}).catch((err) => {
  console.log(err);
  res.satatus(500).send({status: "Error with updating data"});
})
};

const sponsorDelete = (req, res, next) => {
  let sponsorID = req.params.id;
  sponsor.findByIdAndDelete(sponsorID)
  .then(() => {
    res.status(200).send({status: "User Deleted"});
  }).catch((err)=> {
    console.log(err.message);
    res.status(500).send({status: "Error with delete user", erroe: err.message})
  })
}


const sponsorGet = (req, res, next) => {
  let sponsorID = req.params.id;

  const sponsorInfor = sponsor.findById(sponsorID)
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
