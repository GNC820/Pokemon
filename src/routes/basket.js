const express = require("express");

const router = express.Router();
const basketController = require("../controller/basketController");

router.get("/check-out", basketController.getBasket);
router.get("/add", basketController.addToBasket);
router.get("/remove", basketController.checkout);
router.get("/removeFromBasket", basketController.removeFromBasket);
module.exports = router;
