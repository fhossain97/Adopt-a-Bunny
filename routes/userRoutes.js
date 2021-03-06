const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");

router.get("/", userCtrl.indexRoute);

router.post("/", userCtrl.createRoute);

router.get("/:id", userCtrl.showRoute);

router.patch("/:id", userCtrl.updateRoute);

router.delete("/:id", userCtrl.deleteRoute);

module.exports = router;
