const User = require('../models/user')

async function indexRoute(req, res) {
  let allUsers = await User.find({});
  res.json(allUsers);
}

function createRoute(req, res) {
  let newUser = new User(req.body);
  newUser.save(() => res.json({message: 'User Create'});
}

function showRoute(req, res) {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
}

async function updateRoute(req, res) {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json(User);
}

async function deleteRoute(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({message: 'User deleted'};
}

module.exports = {
  indexRoute,
  createRoute,
  showRoute,
  updateRoute,
  deleteRoute
};
