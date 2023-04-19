const express = require("express");
const admin = require("firebase-admin");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const https = require("https");
const fs = require("fs");
const app = express();
const Doctor = require("./models/doctorModel/doctor");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "public/uploads"))
);

const options = {
  key: fs.readFileSync("cerificates/key.pem"),
  cert: fs.readFileSync("cerificates/cert.pem"),
};

const server = https.createServer(options, app);

const io = require("socket.io")(server);

// Initialize Firebase Admin SDK
const serviceAccount = require("./config/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

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
  console.log("        <=== Database connected ! ====>");
  console.log(`<=== Running on URL: https://localhost:${PORT} ====>`);
});

server.listen(PORT, () => {
  console.log(`<=== Server is up and running on port ${PORT} ====>`);
});

// Patient Routes
const patientRouter = require("./routes/patient/PatientRout.js");
app.use("/patient", patientRouter);

// Doctor Routes
const doctorRouter = require("./routes/doctor/DoctorRoute");
app.use("/doctor", doctorRouter);

// Email Routes
const emailRouter = require("./routes/emailRouter/EmailRoute");
app.use("/email", emailRouter);
