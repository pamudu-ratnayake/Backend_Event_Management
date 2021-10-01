let AddEvents = require("../../models/Event&CustomerModels/EventAdd");

//-----POST-----------
exports.postAddEvent = (req, res, next) => {
  const event_name = req.body.event_name;
  const org_name = req.body.org_name;
  const date_of_the_event = req.body.date_of_the_event;
  const date_of_the_event_end = req.body.date_of_the_event_end;
  const location = req.body.location;
  const event_time = req.body.event_time;
  const days_occurs = Number(req.body.days_occurs);
  const event_type = req.body.event_type;
  const organizer_name = req.body.organizer_name;
  const org_nic = req.body.org_nic;
  const boosting_duration = req.body.boosting_duration;
  const boosting_Purpose = req.body.boosting_Purpose;
  const cus_email = req.body.cus_email;
  const cus_con_number = Number(req.body.cus_con_number);
  const description = req.body.description;
  const user_id = req.body.user_id;
  const checkboxOption = req.body.checkboxOption;

  const newEvent = new AddEvents({
    event_name,
    org_name,
    date_of_the_event,
    date_of_the_event_end,
    location,
    event_time,
    days_occurs,
    event_type,
    organizer_name,
    org_nic,
    cus_email,
    cus_con_number,
    description,
    user_id,
    checkboxOption,
    boosting_duration,
    boosting_Purpose,
  });

  newEvent
    .save()
    .then(() => {
      res.json("Event Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//------GET------------
exports.getAllEvents = (req, res, next) => {
  let user_id = req.userId;
  AddEvents.find({ user_id })
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
    });
};

//------GET Events------------
exports.getEvents = (req, res, next) => {
  AddEvents.find()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
    });
};

//--------update-----------
exports.updateEvent = async (req, res) => {
  let event_id = req.params.event_id;
  const { event_name, org_name, date_of_the_event, location, event_time, days_occurs, event_type, organizer_name, org_nic, cus_email, cus_con_number, description } = req.body;

  const eventUpdate = {
    event_name,
    org_name,
    date_of_the_event,
    location,
    event_time,
    days_occurs,
    event_type,
    organizer_name,
    org_nic,
    cus_email,
    cus_con_number,
    description,
    
  };

  const update = await AddEvents.findByIdAndUpdate(event_id, eventUpdate)
    .then(() => {
      res.status(200).send({ status: "Event Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.deleteEvent = async (req, res) => {
  let event_id = req.params.event_id;

  await AddEvents.findByIdAndDelete(event_id)
    .then(() => {
      res.status(200).send({ status: "Event Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.getOneEvent = async (req, res) => {
  let event_id = req.params.event_id;

  await AddEvents.findById(event_id)
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      console.log(err);
    });
};

//-------Get Top Events-------
exports.getTopEvents = (req, res, next) => {
  console.log(`<=== Get Top Events ====>`);
  let sp_type = req.params.sp_type;
  AddEvents.find({checkboxOption: {$all:[sp_type]}, boosting_Purpose: {$exists:true} })
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
    });
};
//--------boost event-----------
exports.boostEvent = async (req, res) => {
  let event_id = req.params.event_id;
  const { boosting_duration,boosting_Purpose} = req.body;

  const boostingEvent = {
    boosting_duration,
    boosting_Purpose,
    

  };

  const update = await AddEvents.findByIdAndUpdate(event_id, boostingEvent)
    .then(() => {
      res.status(200).send({ status: "Event Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};
