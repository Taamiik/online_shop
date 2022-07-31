const { Schema, model } = require("mongoose");

const TheelphoneModel = new Schema({
  title: { type: String, unqiue: true, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  param: { type: Array },
});

module.exports = model("TheelphoneModel", TheelphoneModel);
