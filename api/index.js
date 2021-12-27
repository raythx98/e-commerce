const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")

const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const cartRoute = require("./routes/cart")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log("DB Connection is Successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000"
}))
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.PORT || 5000, ()=>{
  console.log("Backend server is listening on port 5000")
})