const express = require("express");
const db =  require("./seedDb")
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

require("dotenv").config();

// Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); // New
app.use(express.json()); // New

// db connection
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://<ganuci>:<Pokemon123>@cluster0.sqbpsea.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect(`${process.env.URL}`);

// Routes
const userRoutes = require("./src/routes/user");
const collectionRoutes = require("./src/routes/collection");
const basketRoutes = require("./src/routes/basket");

app.use("/user", userRoutes);
app.use("/collection", collectionRoutes);
app.use("/basket", basketRoutes);

app.get("*", function (req, res) {
  res.redirect("/user/login");
});
// Listen on port 5000

app.listen(process.env.PORT || 3000, function(){
  db.initDB()
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

