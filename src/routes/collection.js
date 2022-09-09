const express = require("express");

const router = express.Router();
const collectionController = require("../controller/collectionController");

router.get("/all", collectionController.getCollections);
router.post("/search", collectionController.search);

module.exports = router;
