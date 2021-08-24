let AddEvents = require("../models/EventAdd");

//-----POST-----
exports.postAddEvent = (req, res, next) => {
  const event_name = req.body.event_name;
  const org_name = req.body.org_name;
  const date_of_the_event = req.body.date_of_the_event;
  const location = req.body.location;
  const event_time = req.body.event_time;
  const days_occurs = Number(req.body.days_occurs);
  const event_type = req.body.event_type;
  const organizer_name = req.body.organizer_name;
  const org_nic = req.body.org_nic;
  const cus_email = req.body.cus_email;
  const cus_con_number = Number(req.body.cus_con_number);
  const description = req.body.description;
  const checkboxOption = req.body.checkboxOption;

  const newEvent = new AddEvents({
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
    checkboxOption,
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

//------GET-------
exports.getAllEvents = (req, res, next) => {
  AddEvents.find()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
    });
};

//--------update-------------
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
