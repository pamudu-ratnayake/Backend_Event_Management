const router = require("express").Router();
let AddEvents = require("../controllers/AddEventController");

router.post("/addevent", AddEvents.postAddEvent);
router.get("/", AddEvents.getAllEvents);

module.exports = router;
