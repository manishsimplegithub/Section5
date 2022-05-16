const mongoose = require("../connection");
const schema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  age: Number,
  createdAt: { type: Date, default: new Date() },
});
const model = mongoose.model("user", schema);
module.exports = model;
