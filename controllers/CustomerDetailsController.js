let Customers = require("../models/CustomerDetails");

//---post---
exports.postCustomerDetails = (req, res, next) => {
  const cus_userName = req.body.cus_userName;
  const cus_FName = req.body.cus_FName;
  const cus_LName = req.body.cus_LName;
  const cus_nic = req.body.cus_nic;
  const cus_gender = req.body.cus_gender;
  const cus_address = req.body.cus_address;
  const cus_contact_no = req.body.cus_contact_no;
  const cus_email = req.body.cus_email;
  const cus_description = req.body.cus_description;

  const newCustomer = new newCustomer({
    cus_userName,
    cus_FName,
    cus_LName,
    cus_nic,
    cus_gender,
    cus_address,
    cus_contact_no,
    cus_email,
    cus_description,
  });

  newEvent
    .save()
    .then(() => {
      res.json("Customer Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//----GET----
exports.getCustomers = (req, res, next) => {
  Customers.find()
    .then((customers) => {
      res.json(customers);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateCustomer = async (req, res) => {
  let cus_id = req.params.cus_id;
  const { cus_userName, cus_FName, cus_LName, cus_nic, cus_gender, cus_address, cus_contact_no, cus_email, cus_description } = req.body;

  const customerUpdate = {
    cus_userName,
    cus_FName,
    cus_LName,
    cus_nic,
    cus_gender,
    cus_address,
    cus_contact_no,
    cus_email,
    cus_description,
  };

  const update = await Customers.findByIdAndUpdate(cus_id, customerUpdate)
    .then(() => {
      res.status(200).send({ status: "Customer Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.deleteCustomer = async (req, res) => {
  let cus_id = req.params.cus_id;

  await Customers.findByIdAndDelete(cus_id)
    .then(() => {
      res.status(200).send({ status: "Customer Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.getOneCustomer = async (req, res) => {
  let cus_id = req.params.cus_id;

  await Customers.findById(cus_id)
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      console.log(err);
    });
};
