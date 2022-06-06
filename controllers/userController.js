const User = require('../models/user')

let create = (req, res) => {
    User.create(req.body, (err, u)=>{
        if(err){
            res.status(400).json(err)
            return
        }
            // res.render('profile', {u})
        res.json({u, message: 'Yay you created one'})
    })
}

const index = (req, res) => {
    // respond with our bookmarks
    User.find({}, (err, users)=> {
        if(err){
            res.status(400).json(err)
            return
        }
        // res.render('home', {bookmarks})
        res.json(users)
    })
    // .then(data => { res.json(data)})
}

let show = (req, res) => {
    User.findById(req.params.id, (err, u) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(u)
    })
}

let update = (req, res) => {
    // Update user and send it back
    User.findByIdAndUpdate(req.params.id, req.body, {new: true} ,(err, u) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        // send created user back as JSON
        res.json(u)
    } )
}

let  deleteIt= (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, u)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json({message: 'Item Deleted'})
    })
}
module.exports = {
    create,
    deleteIt,
    update,
    index,
    show
}

const Rabbit = require("../models/rabbit");

async function indexRoute(req, res) {
  let allRabbits = await Rabbit.find({});
  res.render("index", { allRabbits });
}

let newRoute = (req, res) => {
  res.render("new");
};

function createRoute(req, res) {
  let newRabbit = new Rabbit(req.body);
  newRabbit.save(() => console.log("New product was saved!"));
  res.redirect("/rabbits");
}

function showRoute(req, res) {
  Rabbit.findById(req.params.id).then((rabbit) => {
    res.render("show", { rabbit });
  });
}

function editRoute(req, res) {
  res.render("show", { rabbit: Rabbit, id: req.params.id });
}

async function updateRoute(req, res) {
  await Rabbit.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/rabbits/${req.params.id}`);
}

async function deleteRoute(req, res) {
  await Rabbit.findByIdAndDelete(req.params.id);
  res.redirect("/rabbits");
}

let adopt = (req, res) => {
  Rabbit.findById(req.params.id).then((rabbit) => {
    product.qty -= 1;
    product.save(() => {
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
