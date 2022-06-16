const express = require("express");
const router = express.Router();
const upload = require("../db/multer");
const bunnyCtrl = require("../controllers/bunnyController");

router.get("/new", upload.single("Image"), bunnyCtrl.newRoute);

router.get("/", bunnyCtrl.indexRoute);

router.post("/", upload.single("Image"), bunnyCtrl.createRoute);

router.get("/:id", bunnyCtrl.showRoute);

router.patch("/:id", upload.single("Image"), bunnyCtrl.updateRoute);

module.exports = router;
