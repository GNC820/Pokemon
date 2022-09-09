const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BasketSchema = new Schema({
  imageurl: String,
  name: String,
  category: String,
  typeofpokemon: String,
  user: String,
  price: String,
});

// export model
const Basket = mongoose.model("Basket", BasketSchema);
module.exports = Basket;
