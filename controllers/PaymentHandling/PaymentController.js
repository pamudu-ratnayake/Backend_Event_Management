const Payment = require("../../models/PaymentHandling/Payment");

const addPayment = (req, res, next) => {
    const type_id = req.body.orderId;
    const user_email = req.user_email;
    const user_name = req.body.user_name;
    const payment_date = Number(req.body.current_date);
    const date_event_occur = req.body. date_occur;
    const user_id = req.userId;
    const type_name = req.type_name;
    const total = req.amount;
    const type = req.type;
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

  module.exports = {
      addPayment
  };