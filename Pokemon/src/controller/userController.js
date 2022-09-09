const User = require("../models/User");
const bcrypt = require("bcrypt");


exports.login = (req, res) => {
  res.render("login", {error: undefined});
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          res.redirect("../collection/all")
        } else {
          res.render("login", {error: "Wrong username and password"});
        }
      });
    } else {
      res.render("login", {error: "User not found."});
    }
  });
};

exports.register = (req, res) => {
  res.render("register", { data: {} });
};

exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;

  User.create(
    {
      email: email,
      username: username,
      password: password,
    },
    (error, user) => {
      if (error) {
        console.log(error);
      }

      res.redirect("login");
    }
  );
};
