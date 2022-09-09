require("dotenv").config();
const fs = require("fs");
let collection = fs.readFileSync("pokemon_data.json");
const Collection = require("./src/models/Collection");
const mongoose = require("mongoose");

// const url = `mongodb://${process.env.MONGOHOST}:${process.env.MONGOPORT}`;
const url = `${process.env.URL}`;

exports.initDB = () => {
  mongoose.connect(url, (err, client) => {
    if (err) {
      throw err;
    }
    console.log("Seeding database");
    let data = JSON.parse(collection);
  
    data.forEach(function (item) {
      Collection.create(
        {
          ...item,
        },
        (error, item) => {
          if (error) {
            console.log(error);
          }
        }
      );
    });
  });
};
