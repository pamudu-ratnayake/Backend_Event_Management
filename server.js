const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

//DB URL
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

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

//events
const eventAddRouter = require("./routes/Event&CustomerRoutes/EventAddRT.js");
app.use("/eventAdd", eventAddRouter);

//customer 
const customerDetailsRouter = require("./routes/Event&CustomerRoutes/CustomerDetailsRT.js");
app.use("/customer-details", customerDetailsRouter);
