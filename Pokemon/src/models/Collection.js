const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  name: String,
  imageurl: String,
  description: String,
  height: String,
  category: String,
  weight: String,
  typeofpokemon: String,
  price: String,
});

// export model
const Collection = mongoose.model("Collection", CollectionSchema);
module.exports = Collection;
