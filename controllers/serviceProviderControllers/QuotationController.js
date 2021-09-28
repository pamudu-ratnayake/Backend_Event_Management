let Quotation = require("../../models/serviceProviderModels/quotation");

exports.createQuotation = async (req, res, next) => {
  console.log(`<=== Create Quotation  ====>`);
  // Assigning value to variabales
  const event_id = req.body.event_id;
  const provider_id = req.body.provider_id;
  const date_from = req.body.date_from;
  const date_to = req.body.date_to;
  const quotation_details = req.body.quotation_details;
  const terms = req.body.terms;
  const approve = req.body.approve;

  // Create new Quotation---
  const newQuotation = new Quotation({
    event_id,
    provider_id,
    date_from,
    date_to,
    quotation_details,
    terms,
    approve,
  });

  // New Quotation save in Database
  await newQuotation
    .save()
    .then((quotation) => {
      res.json(quotation);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get All Quotation
exports.getAllQuotation = (req, res, next) => {
  console.log(`<=== Get All Quotation ====>`);
  let event_id = req.params.event_id;
  Quotation.find({ event_id })
    .populate("event_id")
    .then((quotation) => {
      res.json(quotation);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Servicer Provider
exports.deleteQuotation = async (req, res) => {
  console.log(`<=== Delete Servicer Provider ====>`);
  let id = req.params.id;

  await Quotation.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Quotation Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

// Get Quotation By Id
exports.getQuotation = async (req, res) => {
  console.log(`<=== Get Quotation ====>`);

  let id = req.params.id;

  await Quotation.findById(id)
    .populate("event_id")
    .then((quotation) => {
      res.json(quotation);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateQuotation = async (req, res) => {
  let quotation_id = req.params.quotation_id;
  const { approve } = req.body;

  const quotationUpdate = {
    approve,
  };

  await Quotation.findByIdAndUpdate(quotation_id, quotationUpdate)
    .then(() => {
      res.status(200).send({ status: "Quotation Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};
