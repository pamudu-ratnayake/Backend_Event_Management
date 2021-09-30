const router = require("express").Router();
let AddEvents = require("../../controllers/Event&CustomerControllers/AddEventController");

const auth = require("../../middleware/auth");

//routes
router.post("/addevent", AddEvents.postAddEvent);
router.get("/getevents", auth, AddEvents.getAllEvents);
router.get("/events", AddEvents.getEvents);
router.put("/updateevent/:event_id", AddEvents.updateEvent);
router.delete("/deleteevent/:event_id", AddEvents.deleteEvent);
router.get("/getOneEvent/:event_id", AddEvents.getOneEvent);

module.exports = router;
