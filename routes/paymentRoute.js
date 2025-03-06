const express = require("express");
const createRazorPayOrder = require("../controllers/paymentController");

const router = express.Router();

router.post("/razorpay", createRazorPayOrder);

module.exports = router;
