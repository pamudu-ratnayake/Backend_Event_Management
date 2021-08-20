const Advertisement = require("../models/Advertisement");

const addAdvertisement = (req, res, next) => {
  const  service_Provider_Name = req.body. service_Provider_Name;
  // const SPID = req.body.SPID;
  // const AID = req.body.AID;
  const email_SP = req.body.email_SP;
  const contact_Number_SP = Number(req.body.contact_Number_SP);
  const service_Type = req.body.service_Type;
  const advertisement_Duration = req.body.advertisement_Duration;
  const advertisement_Des = req.body.advertisement_Des;
  const advertisement_Pic = req.body.advertisement_Pic;
  // const PType = req.body.PType;

  // console.log('Come up to this');

  const newAdvertisement = new Advertisement({
    service_Provider_Name,
    // SPID,
    // AID,
    email_SP,
    contact_Number_SP,
    service_Type,
    advertisement_Duration,
    advertisement_Des,
    advertisement_Pic
    // PType,
  });

  newAdvertisement
    .save()
    .then(() => {
      res.json("Advertisement Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewAdvertisement = (req, res, next) => {
  Advertisement.find()
    .then((Advertisement) => {
      res.json(Advertisement);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateAdvertisement = async (req, res, next) => {
  const advertisementid = req.params.id;
  const { service_Provider_Name, email_SP, contact_Number_SP, service_Type, advertisement_Duration,advertisement_Des,advertisement_Pic} =
    req.body;

  const updateAdd = {
    service_Provider_Name,
    // SPID,
    // AID,
    email_SP,
    contact_Number_SP,
    service_Type,
    advertisement_Duration,
    advertisement_Des,
    advertisement_Pic
    // PType,
  };

  const update = await Advertisement.findByIdAndUpdate(
    advertisementid,
    updateAdd
  )
    .then((update) => {
      res.json(update);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteAdvertisement = async(req, res, next) => {
  let advertisementid = req.params.id;

  await Advertisement.findByIdAndDelete(advertisementid)

    .then(() => {
      res.json("Advertisement Deleted");
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewoneAdvertisement = (req, res, next) => {
  let advertisementid = req.params.id; 
  Advertisement.findById(advertisementid)
    .then((Advertisement) => {
      res.json(Advertisement);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  addAdvertisement,
  viewAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
  viewoneAdvertisement
};
