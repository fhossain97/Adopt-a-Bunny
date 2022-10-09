const express = require("express");
const router = express.Router();
// const upload = require("../db/multer");
const bunnyCtrl = require("../controllers/bunnyController");
const imageExport = require("../db/cloudinary")

//For Multer
// router.get("/new", upload.single("Image"), bunnyCtrl.newRoute);
// router.get("/", bunnyCtrl.indexRoute);
// router.post("/", upload.single("Image"), bunnyCtrl.createRoute);
// router.get("/:id", bunnyCtrl.showRoute);
// router.patch("/:id", upload.single("Image"), bunnyCtrl.updateRoute);

//For Cloudinary
router.get("/new", imageExport.single("Image"), bunnyCtrl.newRoute);
router.get("/", bunnyCtrl.indexRoute);
router.post("/", imageExport.single("Image"), bunnyCtrl.createRoute);
router.get("/:id", bunnyCtrl.showRoute);
router.patch("/:id", imageExport.single("Image"), bunnyCtrl.updateRoute);

module.exports = router;
