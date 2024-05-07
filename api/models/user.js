const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String },
  mobile: { type: Number, required: true },
  city: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
