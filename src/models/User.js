const mongoose = require("mongoose");
const bcrypt =  require('bcrypt')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

// export model
const User = mongoose.model("User", UserSchema);
module.exports = User;
