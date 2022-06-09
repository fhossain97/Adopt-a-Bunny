const breed = require("../models/breed");
const Bunny = require("../models/breed");

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
    res.json({message: "Adopted!"});
    product.save(() => {
      res.redirect(`/rabbits/${req.params.id}`);
    });
  });
};

module.exports = {
  newRoute,
  createRoute,
  showRoute,
  editRoute,
  updateRoute,
  deleteRoute,
  adopt,
};
