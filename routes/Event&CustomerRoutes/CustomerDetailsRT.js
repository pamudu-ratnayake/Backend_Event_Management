const router = require("express").Router();
let Customers = require("../../controllers/Event&CustomerControllers/CustomerDetailsController");

const auth = require("../../middleware/auth");

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
router.post("/addcustomer", auth, upload.single("file"), Customers.postCustomerDetails);
router.get("/get-customers", auth, Customers.getCustomers);
router.put("/update-customer/:cus_id",auth, Customers.updateCustomer);
router.delete("/delet-customer/:cus_id",auth, Customers.deleteCustomer);
router.get("/getOneCustomer/:user_id",auth, Customers.getOneCustomer);

module.exports = router;