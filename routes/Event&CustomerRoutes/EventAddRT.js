const router = require("express").Router();
let AddEvents = require("../../controllers/Event&CustomerControllers/AddEventController");

const auth = require("../../middleware/auth");

//routes
router.post("/addevent", auth, AddEvents.postAddEvent);
router.get("/getevents", auth, AddEvents.getAllEvents);
router.get("/events", auth, AddEvents.getEvents);
router.put("/updateevent/:event_id", auth, AddEvents.updateEvent);
router.delete("/deleteevent/:event_id", auth, AddEvents.deleteEvent);
router.get("/getOneEvent/:event_id", auth, AddEvents.getOneEvent);
router.get("/gettopevents/:sp_type", AddEvents.getTopEvents);


router.put("/boostevent/:event_id", AddEvents.boostEvent);

module.exports = router;

