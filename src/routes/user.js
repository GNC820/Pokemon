const express = require("express");

const router = express.Router();
const userController = require("../controller/userController");

router.get("/login", userController.login);
router.post("/loginUser", userController.loginUser);
router.get("/register", userController.register);
router.post("/registerUser", userController.registerUser);
module.exports = router;
