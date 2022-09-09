const Basket = require("../models/Basket");
const Collection = require("../models/Collection");

// get all items
exports.getBasket = (req, res) => {
  Basket.find({}, function (err, data) {
    var basketData = {};

    data.forEach(function (basket) {
      basketData[basket._id] = basket;
    });

    res.render("basket", { basketData: Object.values(basketData) });
  });
};

// buy button sign
exports.addToBasket = (req, res) => {
  const pokemonName = Object.keys(req.query)[0];

  Collection.find({}, function (err, collectionData) {
    const pokemon = collectionData.find((c) => c.name === pokemonName);

    Basket.create(
      {
        imageurl: pokemon.imageurl,
        name: pokemon.name,
        category: pokemon.category,
        typeofpokemon: pokemon.typeofpokemon,
        price: pokemon.price,
      },
      (error, basket) => {
        if (error) {
          console.log(error);
        }
      }
    );
    res.redirect("/basket/check-out");
  });
};

// remove a specific pokemon from basket
exports.removeFromBasket = (req, res) => {
  const pokemonName = Object.keys(req.query)[0];

  Basket.deleteMany({ name: pokemonName }, (error, deleted) => {});

  res.redirect("/basket/check-out");
};

// delete from basket
exports.checkout = (req, res) => {
  Basket.find({}, function (err, data) {
    data.forEach(function (basket) {
      Basket.deleteMany({ name: basket.name }, (error, deleted) => {});
    });
    res.redirect("/collection/all");
  });
};
