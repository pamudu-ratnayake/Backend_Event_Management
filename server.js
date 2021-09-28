const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.get("/public", express.static("public"));

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
  console.log(`<=== Running on URL: http://localhost:${PORT} ====>`);
});

const AdvertisementRouter = require("./routes/Ad&BoostingRouters/Advertisements.js");

app.use("/advertisement", AdvertisementRouter);

app.listen(PORT, () => {
  console.log(`<=== Server is up and running on port ${PORT} ====>`);
});

//events
const eventAddRouter = require("./routes/Event&CustomerRoutes/EventAddRT.js");
app.use("/eventAdd", eventAddRouter);

//customer
const customerDetailsRouter = require("./routes/Event&CustomerRoutes/CustomerDetailsRT.js");
app.use("/customerdetails", customerDetailsRouter);
// Service Provider Routes
const serviceProviderRouter = require("./routes/ServiceProviderRoutesrs/ServiceProviderRT.js");
app.use("/serviceProvider", serviceProviderRouter);

const companyRouter = require("./routes/ServiceProviderRoutesrs/CompanyRT.js");
app.use("/company", companyRouter);

const sponsorRouter = require("./routes/Consulting&SponsorsRoutes/sponsors.js");
app.use("/sponsor", sponsorRouter);

const consultingRouter = require("./routes/Consulting&SponsorsRoutes/consultingRt.js");
app.use("/consulting", consultingRouter);

const authRoutes = require("./routes/auth/userRT.js");
app.use("/auth-user", authRoutes);
// Quotation Routes
const quotationRouter = require("./routes/ServiceProviderRoutesrs/QuotationRT.js");
app.use("/quotation", quotationRouter);
