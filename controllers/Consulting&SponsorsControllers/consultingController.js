const consulting = require("../../models/Consulting&SponsorsModels/consultingMd");

const consultingPost = (req, res, next) => {
  const issue = req.body.issue;
  const eventID = req.body.eventID;
  const answers = req.body.answers;

  const newConsulting = new consulting({
    issue,
    eventID,
    answers,
  });

  newConsulting
    .save()
    .then(() => {
      res.json("Issue Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const consultingsGet = (req, res, next) => {
  consulting
    .find()
    .then((consulting) => {
      res.json(consulting);
    })
    .catch((err) => {
      console.log(err);
    });
};

const consultingUpdate = (req, res, next) => {
  let ID = req.params.id;
  const { issue, eventID, answers } = req.body;

  const updateConsulting = {
    issue,
    eventID,
    answers,
  };

  const update = consulting
    .findByIdAndUpdate(ID, updateConsulting)
    .then(() => {
      res.status(200).send({ status: "User Updated", user: update });
    })
    .catch((err) => {
      console.log(err);
      res.satatus(500).send({ status: "Error with updating data" });
    });
};

const consultingDelete = (req, res, next) => {
  let ID = req.params.id;
  consulting
    .findByIdAndDelete(ID)
    .then(() => {
      res.status(200).send({ status: "Consulting Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete issue", erroe: err.message });
    });
};

const consultingGet = (req, res, next) => {
  let ID = req.params.id;

  const consultingInfor = consulting
    .findById(ID)
    .then((consultingData) => {
      res
        .json(consultingData)
        .status(200)
        .send({ status: "Issue fetched", user: consultingInfor });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get issue", error: err.message });
    });
};

module.exports = {
  consultingPost,
  consultingsGet,
  consultingUpdate,
  consultingDelete,
  consultingGet,
};