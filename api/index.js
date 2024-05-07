const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://gngzirakpurcom:llGxipE4xrQSWfjn@cluster0.td4zkit.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error Connecting to MongoDB");
  });

app.listen(port, () => {
  console.log("server is running on port 3000");
});

const User = require("./models/user");
// const User = require("./models/user");

//endpoint to create a new post in the backend
app.post("/contactUs", async (req, res) => {
  try {
    const { lastName, firstName, mobileNo, message, email } = req.body;

    const newUserData = {
      name: firstName + " " + lastName,
      mobile: mobileNo,
      email: email,
      city: message,
    };

    const newUser = new User(newUserData);

    await newUser.save();

    console.log(req.body);

    res.status(200).json({ message: "Post saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "post creation failed" });
  }
});

app.get("/getAll", async (req, res) => {
  console.log("try")
  try {
    console.log("first")
    const users = await User.find();
    res.status(200).json(users);
  } catch(error) {
    console.log(error)
    res.status(500).json({ message: "error getting the users" });
  }
});
// const getUser = asyncHandler(async (req, res) => {
