const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen("5000", () => {
  console.log("Backend is running.");
});



// test if server is working within the terminal 
// app.use("/", (req, res) => {
//   console.log("This is the main url.")
// })
