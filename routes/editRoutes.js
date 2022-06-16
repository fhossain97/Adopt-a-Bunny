const express = require("express");
const router = express.Router();
const upload = require("../db/multer");
const Bunny = require("../models/bunny");

router.get("/:id/edit", function showRoute(req, res) {
  Bunny.findById(req.params.id).then((bunny) => {
    res.render("edit", { bunny });
  });
});

router.get("/:id/edit", upload.single("Image"), function editRoute(req, res) {
  res.render("edit", { bunny: Bunny, id: req.params.id });
});

router.patch(
  "/:id/edit",
  upload.single("Image"),
  async function updateRoute(req, res) {
    await Bunny.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/rabbits");
  }
);

router.delete("/:id/edit", async function deleteRoute(req, res) {
  await Bunny.findByIdAndDelete(req.params.id);
  res.redirect("/rabbits");
});

module.exports = router;
