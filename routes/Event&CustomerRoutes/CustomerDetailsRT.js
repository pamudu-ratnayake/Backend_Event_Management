const router = require("express").Router();
let Customers = require("../../controllers/Event&CustomerControllers/CustomerDetailsController");

//routes
router.post("/add-customer", Customers.postCustomerDetails);
router.get("/get-customers", Customers.getCustomers);
router.put("/update-customer/:cus_id", Customers.updateCustomer);
router.delete("/delet-customer/:cus_id", Customers.deleteCustomer);
router.get("/getOneCustomer/:cus_id", Customers.getOneCustomer);

module.exports = router;
