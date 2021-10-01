// import bcrypt from "bcryptjs";
// import  jwt from "jsonwebtoken";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

let UserAuthModel = require("../../models/auth/user");
const CreateUtility = require("../serviceProviderControllers/helper/CreateUtility.js");

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserAuthModel.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "2h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  const { email, password, firstName, lastName, service_type, user_type } = req.body;

  try {
    const oldUser = await UserAuthModel.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserAuthModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      service_type,
      user_type,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    if (req.body.user_type == "service provider") {
      await CreateUtility.createUtilities(result, req.body);
    }

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

const getUser = (req, res, next) => {
  let _id = req.userId;
  UserAuthModel.findById(_id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  login,
  signup,
  getUser,
};
