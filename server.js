require("dotenv").config();

const express = require("express");
const cors = require("cors");
const paymentRoute = require("./routes/paymentRoute");
const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Payment Gateway API");
});

app.use("/api/payment", paymentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
