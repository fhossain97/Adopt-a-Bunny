const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bunnySchema = new Schema({
  name: String,
  description: String,
  img: String,
  status: String,
  breed: String,
  age: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Bunny", bunnySchema);
