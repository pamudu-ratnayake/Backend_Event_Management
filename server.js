const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connected!");
});

const AdvertisementRouter = require("./routes/Advertisements.js");

app.use("/advertisement",AdvertisementRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
