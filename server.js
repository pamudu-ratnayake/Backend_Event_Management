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
	console.log("        <=== Database connected ! ====>");
	console.log(`<=== Running on URL: http://localhost:${PORT} ====>`);
});

app.listen(PORT, () => {
	console.log(`<=== Server is up and running on port ${PORT} ====>`);
});

const eventAddRouter = require("./routes/EventAddRT.js");
app.use("/eventAdd", eventAddRouter);

// Service Provider Routes
const serviceProviderRouter = require("./routes/ServiceProviderRoutesrs/ServiceProviderRT.js");
app.use("/serviceProvider", serviceProviderRouter);
