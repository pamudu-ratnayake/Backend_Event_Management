  
// import express from "express";
// const router = express.Router();
const router = require("express").Router();

// import { login, signup } from "../../controllers/auth/userController.js";

const {login, signup} = require("../../controllers/auth/userController.js")

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;