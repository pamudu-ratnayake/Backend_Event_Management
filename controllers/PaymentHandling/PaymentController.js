const Payment = require("../../models/PaymentHandling/Payment");

const addPayment = (req, res, next) => {
    const type_id = req.body.type_id;
    const user_email = req.body.user_email;
    const user_name = req.body.user_name;
    const payment_date = req.body.payment_date;
    const date_event_occur = req.body.date_event_occur;
    const user_id = req.userId;
    const type_name = req.body.type_name;
    const total = req.body.total;
    const type = req.body.type;
    // const PType = req.body.PType;
  
    const newPayment = new Payment({
        type_id,
        user_email,
        user_name,
        payment_date,
        date_event_occur,
        user_id,
        type_name,
        total,
        type
    });
  
    newPayment
      .save()
      .then(() => {
        res.json("Payment Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const viewPayment = (req, res, next) => {
    Payment.find()
      .then((Payment) => {
        res.json(Payment);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const viewonePayment = (req, res, next) => {
    let paymentid = req.params.id; 
    Payment.findById(paymentid)
      .then((Payment) => {
        res.json(Payment);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const viewUserPayment = (req, res, next) => {
    let user_id = req.userId;
    Payment.find({ user_id })
      .then((Payment) => {
        res.json(Payment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  module.exports = {
      addPayment,
      viewPayment,
      viewUserPayment,
      viewonePayment
  };