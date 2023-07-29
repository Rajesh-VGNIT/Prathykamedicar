const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  aadhar: String,
  address: String,
  city: String,
  treathment: String,
  query: String
 
});

module.exports = mongoose.model("physiotherapy", userSchema);
