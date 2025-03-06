require("dotenv").config();

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createRazorpayOrder = async (req, res) => {
  console.log(req.body);
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      payment_capture: 1,
    };
    const order = await razorpay.orders.create(options);
    res.status(200).json({ message: "Payment Successfull", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = createRazorpayOrder;
