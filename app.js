const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const Router = require("./api/routes/Router");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/' , Router)

const mongoURL = "mongodb+srv://Ali:Ali098345@cluster0.ek7rpfd.mongodb.net/"
mongoose.connect (mongoURL);
mongoose.connection.on("connected", () => {
 console.log("mongo connected");
});

mongoose.connection.on("error", (err) => {
 console.error("MongoDB connection error:", err);
});


app.get("/", (req, res) => {
    res.status(200).json({
     message: "server is live✔"
    });
})

app.get("/main", (req, res) => {
    res.status(200).json({
        name:"Ali",
        age: 12,
    });
});

app.post("/order", (req, res) =>{
  const { order } = req.body;

  if (!order.amount) {
    return res.status(500).json({
        error: true,
        errorMessage: "amount is must"
    });
  }
  res.status(200).json({
    message: "order resived",
    price: order.amount * order.price,
  });
});


module.exports = app