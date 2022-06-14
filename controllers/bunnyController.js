const Bunny = require("../models/bunny");

async function indexRoute(req, res) {
  let allBunnies = await Bunny.find({}).populate("owner");
  res.render("index", { allBunnies });
}

let newRoute = (req, res) => {
  res.render("new");
};

function createRoute(req, res) {
  let newBunny = new Bunny(req.body);
  newBunny.save(() => console.log("New rabbit was saved!"));
  Bunny.findById(newBunny._id)
    .populate("owner")
    .then(() => res.redirect("/rabbits"));
}

function showRoute(req, res) {
  Bunny.findById(req.params.id).then((bunny) => {
    res.render("show", { bunny });
  });
}

async function updateRoute(req, res) {
  await Bunny.findByIdAndUpdate(req.params.id, req.body).populate("owner");
  res.redirect("/rabbits");
}

module.exports = {
  indexRoute,
  newRoute,
  createRoute,
  showRoute,
  updateRoute,
};
