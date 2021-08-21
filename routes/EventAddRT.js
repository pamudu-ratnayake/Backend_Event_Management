const router = require("express").Router();
let AddEvents = require("../controllers/AddEventController");

router.post("/addevent", AddEvents.postAddEvent);
router.get("/getevents", AddEvents.getAllEvents);
router.put("/updateevent/:event_id", AddEvents.updateEvent);
router.delete("/deleteevent/:event_id", AddEvents.deleteEvent);
router.get("/getOneEvent/:event_id", AddEvents. getOneEvent)

module.exports = router;
