const consulting = require("../models/consultingMd");

const consultingPost = (req, res, next) => {
  const issue = req.body.issue;
  const eventID = req.body.eventID;
  const answer1 = req.body.answer1;
  const answer2 = req.body.answer2;
  const answer3 = req.body.answer3;
  const answer4 = req.body.answer4;
  const answer5 = req.body.answer5;
  const answer6 = req.body.answer6;

  const newConsulting = new consulting({
    issue,
    eventID,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
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
  const { issue, eventID, answer1, answer2, answer3, answer4, answer5, answer6 } = req.body;

  const updateConsulting = {
    issue,
    eventID,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
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