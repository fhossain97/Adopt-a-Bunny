const Bunny = require("../models/bunny");
const cloudinary = require("../db/cloudinary");

async function indexRoute(req, res) {
  let allBunnies = await Bunny.find({}).populate("owner");
  res.render("index", { allBunnies });
}

let newRoute = (req, res) => {
  res.render("new");
};

function createRoute(req, res) {
  console.log(req.file);
  if (req.file) {
    // let cloud = cloudinary.uploader.upload(req.file.filename, "images")
    // console.log(cloud)
    req.body.images = req.file.path;
  }
  console.log(req.body)
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
  console.log(req.file);
  if (req.file) {
    req.body.images = req.file.path;
  }
  console.log(req.file);
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
