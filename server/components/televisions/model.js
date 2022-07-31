const { Schema, model } = require("mongoose");

const TelevisionsModel = new Schema({
  title: { type: String, unqiue: true, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  param: { type: Array },
});

module.exports = model("TelevisionsModel", TelevisionsModel);
