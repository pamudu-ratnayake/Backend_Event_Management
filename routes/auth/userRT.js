  

// const router = express.Router();
const router = require("express").Router();
const auth = require("../../middleware/auth")

const {login, signup, getUser} = require("../../controllers/auth/userController.js")

router.post("/login", login);
router.post("/signup", signup);
router.get("/get-user",auth, getUser);

module.exports = router;