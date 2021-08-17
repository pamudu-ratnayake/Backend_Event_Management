const router = require("express").Router();
const Sponsor = require("../models/sponsor");
const express = require("express");

const sponsorPost = (req, res, next) => {
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




module.exports = {
  sponsorPost
};
