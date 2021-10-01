const consulting = require("../../models/Consulting&SponsorsModels/consultingMd");

//Add issue

const consultingPost = (req, res, next) => {
  const issue = req.body.issue;
  const eventObj = req.body.eventObj;
  const answers = req.body.answers;

  const newConsulting = new consulting({
    issue,
    eventObj,
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

//Get All issues

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

// const consultingUpdate = (req, res, next) => {
//   let ID = req.params.id;
//   const { answers } = req.body;

//   const updateConsulting = {
//     answers,
//   };

//   const update = consulting
//     .findByIdAndUpdate(ID, { $push: req.body })
//     .then(() => {
//       res.status(200).send({ status: "User Updated", user: update });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.satatus(500).send({ status: "Error with updating data" });
//     });
// };

// const consultingUpdate = (req, res, next) => {
//   let ID = req.params.id;
//   const {  answers } = req.body;

//   const updateConsulting = {
//     answers,
//   };

//   const update = consulting
//     .findByIdAndUpdate(ID, updateConsulting)
//     .then(() => {
//       res.status(200).send({ status: "User Updated", user: update });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.satatus(500).send({ status: "Error with updating data" });
//     });
// };

//Delete issue

const consultingDelete = (req, res, next) => {
  let ID = req.params.id;
  consulting
    .findByIdAndDelete(ID)
    .then(() => {
      res.status(200).send({ status: "Consulting Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with delete issue", erroe: err.message });
    });
};

//Get issue by ID

const consultingGet = (req, res, next) => {
  let ID = req.params.id;

  const consultingInfor = consulting
    .findById(ID)
    .then((consultingData) => {
      res.json(consultingData).status(200).send({ status: "Issue fetched", user: consultingInfor });
    })
    .catch(() => {
      console.log(err.message);
      res.status(500).send({ status: "Error with get issue", error: err.message });
    });
};

//Answer update ---> Array Update

const answerUpdate = async (req, res, next) => {
  console.log("update answer");
  let ID = req.params.id;
  const answers = req.body.answers;

  // const updateConsulting = {
  //   answers,
  // };

  const update = consulting
    .findByIdAndUpdate(ID, { $push: { answers: answers } })
    .then(() => {
      res.status(200).send({ status: "Answer Updated!" });
    })
    .catch((err) => {
      res.satatus(500).send({ status: "Error with updating data" });
      console.log(err);
    });
};

//Get Issue By ID

const getByeventID = (req, res, next) => {
  let event_id = req.eventObj._id;

  AddEvents.find({ event_id })
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  consultingPost,
  consultingsGet,
  // consultingUpdate,
  consultingDelete,
  consultingGet,
  answerUpdate,
  getByeventID,
};
