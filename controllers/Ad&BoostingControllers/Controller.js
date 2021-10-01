const Advertisement = require("../../models/Ad&BoostingModules/Advertisement");

//control class

//-----POST--------
const addAdvertisement = (req, res, next) => {
  const  service_Provider_Name = req.body. service_Provider_Name;
  const service_Provider_ID = req.userId;
  // const AID = req.body.AID;
  const email_SP = req.body.email_SP;
  const contact_Number_SP = Number(req.body.contact_Number_SP);
  const service_Type = req.body.service_Type;
  const advertisement_Duration = req.body.advertisement_Duration;
  const advertisement_title = req.body.advertisement_title;
  const advertisement_Des = req.body.advertisement_Des;
  const advertisement_Pic = "http://localhost:8080/public/uploads/" +  req.file.originalname;
  const boosting_Pack = req.body.boosting_Pack;
  const total = req.body.total;
  // const PType = req.body.PType;

  const newAdvertisement = new Advertisement({
    service_Provider_Name,
    service_Provider_ID,
    email_SP,
    contact_Number_SP,
    service_Type,
    advertisement_Duration,
    advertisement_title,
    advertisement_Des,
    advertisement_Pic,
    boosting_Pack,
    total
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

//------GET------------
const viewAdvertisement = (req, res, next) => {
  Advertisement.find()
    .then((Advertisement) => {
      res.json(Advertisement);
    })
    .catch((err) => {
      console.log(err);
    });
};

//--------update-----------
const updateAdvertisement = async (req, res, next) => {
  const advertisementid = req.params.id;
  const { service_Provider_Name, email_SP, contact_Number_SP, service_Type, advertisement_Duration,advertisement_title,advertisement_Des,advertisement_Pic} =
    req.body;

    
  const updateAdd = {
    service_Provider_Name,
    // SPID,
    // AID,
    email_SP,
    contact_Number_SP,
    service_Type,
    advertisement_Duration,
    advertisement_title,
    advertisement_Des,
    advertisement_Pic,
    boosting_Pack
   
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

//--------delete-----------
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


//--------view each user advertisement -----------
const viewUserAdvertisement = (req, res, next) => {
  let service_Provider_ID = req.userId;
  Advertisement.find({ service_Provider_ID })
    .then((Advertisement) => {
      res.json(Advertisement);
    })
    .catch((err) => {
      console.log(err);
    });
};

//--------view advertisement -----------
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


//--------boost advertisement-----------
const boostAdvertisement = async (req, res, next) => {
  const advertisementid = req.params.id;
  const {boosting_Pack,total } =
    req.body;

const boostAdd = {
  boosting_Pack,
  total
  
};

const updateBoostPack = await Advertisement.findByIdAndUpdate(
  advertisementid,
  boostAdd
)
  .then((updateBoostPack) => {
    res.json(updateBoostPack);
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
  viewoneAdvertisement,
  viewUserAdvertisement,
  boostAdvertisement
};
