  
// import express from "express";
// const router = express.Router();
const router = require("express").Router();
const auth = require("../../middleware/auth")

// import { login, signup } from "../../controllers/auth/userController.js";

const {login, signup, getUser} = require("../../controllers/auth/userController.js")

router.post("/login", login);
router.post("/signup", signup);
router.get("/get-user",auth, getUser);

module.exports = router;