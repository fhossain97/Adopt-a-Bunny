const Breed = require("../models/breed");

async function indexRoute(req, res) {
  let allBreeds = await Breed.find({});
  res.render("index", { allBreeds });
}

function createRoute(req, res) {
  let newBreed = new Breed(req.body);
  newBreed.save(() => console.log("New rabbit breed was saved!"));
  res.redirect("/rabbits");
}

// function showRoute(req, res) {
//   Breed.findById(req.params.id).then((breed) => {
//     res.render("show", { breed });
//   });
// }

async function updateRoute(req, res) {
  await Breed.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/rabbits/${req.params.id}`);
}

async function deleteRoute(req, res) {
  await Breed.findByIdAndDelete(req.params.id);
  res.redirect("/rabbits");
}

module.exports = {
  indexRoute,
  createRoute,
  // showRoute,
  updateRoute,
  deleteRoute
};
