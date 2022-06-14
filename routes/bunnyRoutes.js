const express = require("express");
const router = express.Router();
const bunnyCtrl = require("../controllers/bunnyController");

router.get("/new", bunnyCtrl.newRoute);

router.get("/", bunnyCtrl.indexRoute);

router.post("/", bunnyCtrl.createRoute);

router.get("/:id", bunnyCtrl.showRoute);

router.patch("/:id", bunnyCtrl.updateRoute);

module.exports = router;
