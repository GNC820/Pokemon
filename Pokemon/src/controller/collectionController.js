const Collection = require("../models/Collection");

// get all pokemons
exports.getCollections = (req, res) => {
  Collection.find({}, function (err, collectionData) {
    res.render("collection", { collectionData });
  });
};

// search for custom pokemons
exports.search = (req, res) => {
  const { search } = req.body;

  Collection.find(
    { name: { $regex: `.*${capitalizeFirstLetter(search)}.*` } },
    function (err, collectionData) {
      res.render("collection", { collectionData });
    }
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
