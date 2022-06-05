const Rabbit = require('../models/rabbit');

async function indexRoute (req, res) {
  let allRabbits= await Rabbit.find({})
  res.render('index.ejs', {allRabbits})
}

let newRoute = (req, res) => {
  res.render('new.ejs');
};

function createRoute(req, res) {
  let newRabbit = new Rabbit (req.body);
  newRabbit.save(() => console.log('New product was saved!'));
  res.redirect('/rabbits');
}

function showRoute(req, res) {
  Rabbit.findById(req.params.id).then((rabbit) => {
  res.render('show', {rabbit})
})
}

function editRoute(req, res) {
  res.render('show', {rabbit: Rabbit, id: req.params.id})
}

async function updateRoute(req, res) {
  await Rabbit.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/rabbits/${req.params.id}`);
}

async function deleteRoute(req, res) {
  await Rabbit.findByIdAndDelete(req.params.id);
  res.redirect('/rabbits');
}

let adopt = (req, res) => {
  Rabbit.findById(req.params.id).then((rabbit) => {
  product.qty -=1
  product.save(() => {
    res.redirect(`/rabbits/${req.params.id}`)
  })
  }
)}

module.exports = {
  indexRoute,
  newRoute,
  createRoute,
  showRoute,
  editRoute,
  updateRoute,
  deleteRoute,
  adopt
};