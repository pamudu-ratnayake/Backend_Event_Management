let AddEvents = require("../models/EventAdd");

exports.postAddEvent = (req, res, next) => {
  const event_name = req.body.event_name;
  const org_name = req.body.org_name;
  const date_of_the_event = Date(req.body.date_of_the_event);
  const location = req.body.location;
  const event_time = req.body.event_time;
  const days_occurs = Number(req.body.days_occurs);
  const event_type = req.body.event_type;
  const organizer_name = req.body.organizer_name;
  const cus_id = req.body.cus_id;
  const cus_email = req.body.cus_email;
  const cus_con_number = Number(req.body.cus_con_number);

  const newEvent = new AddEvents({
    event_name,
    org_name,
    date_of_the_event,
    location,
    event_time,
    days_occurs,
    event_type,
    organizer_name,
    cus_id,
    cus_email,
    cus_con_number,
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

exports.getAllEvents = (req, res, next) => {
  AddEvents.find()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
    });
};
