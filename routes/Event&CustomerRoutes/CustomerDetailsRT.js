const router = require("express").Router();
let Customers = require("../../controllers/Event&CustomerControllers/CustomerDetailsController");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../../../../Event Management/Backend-Event-Management/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//routes
router.post("/addcustomer", upload.single("file"), Customers.postCustomerDetails);
router.get("/get-customers", Customers.getCustomers);
router.put("/update-customer/:cus_id", Customers.updateCustomer);
router.delete("/delet-customer/:cus_id", Customers.deleteCustomer);
router.get("/getOneCustomer/:user_id", Customers.getOneCustomer);


module.exports = router;
