const Bunny = require("../models/bunny");

function indexRoute(req, res) {
  Bunny.find({})
  .populate('owner')
  .then(allBunnies => res.render("index", { allBunnies }))
  //res.render("index", { allBunnies });
}

let newRoute = (req, res) => {
  res.render("new");
};

function createRoute(req, res) {
  let newBunny = new Bunny(req.body);
  newBunny.save(() => console.log("New rabbit was saved!"));
  res.redirect("/rabbits");
}

function showRoute(req, res) {
  Bunny.findById(req.params.id).then((bunny) => {
    res.render("show", { bunny });
  });
}

function editRoute(req, res) {
  res.render("show", { bunny: Bunny, id: req.params.id });
}

async function updateRoute(req, res) {
  await Bunny.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/rabbits/${req.params.id}`);
}

async function deleteRoute(req, res) {
  await Bunny.findByIdAndDelete(req.params.id);
  res.redirect("/rabbits");
}

let adopt = (req, res) => {
  Bunny.findById(req.params.id).then((bunny) => {
    res.json({ message: "Adopted!" });
    bunny.save(() => {
      res.redirect(`/rabbits/${req.params.id}`);
    });
  });
};

module.exports = {
  indexRoute,
  newRoute,
  createRoute,
  showRoute,
  editRoute,
  updateRoute,
  deleteRoute,
  adopt,
};
