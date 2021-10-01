let Customers = require("../../models/Event&CustomerModels/CustomerDetails");
let User = require("../../models/auth/user");

//---post-----------
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
  const prof_img = "http://localhost:8080/public/uploads/" + req.file.originalname;
  const user_id = req.body.user_id;

  const newCustomer = new Customers({
    cus_userName,
    cus_FName,
    cus_LName,
    cus_nic,
    cus_gender,
    cus_address,
    cus_contact_no,
    cus_email,
    cus_description,
    prof_img,
    user_id,
  });

  newCustomer
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

//----GET User Details----
exports.getUser = (req, res, next) => {
  User.find()
    .then((customers) => {
      res.json(customers);
    })
    .catch((err) => {
      console.log(err);
    });
};

//----------update-------------
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

//---------DELETE customer--------
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

//---------GET One Customer------------------
exports.getOneCustomer = async (req, res) => {
  let user_id = req.params.user_id;

  await Customers.findOne({ user_id })
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      console.log(err);
    });
};
