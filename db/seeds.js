require("./connection");
const Bunny = require("../models/bunny");
const User = require("../models/user");
const rabbitseeds = require("./seeds.json");

Bunny.deleteMany({})
  .then(() => User.deleteMany({}))
  .then(() => {
    return User.create({
      name: "Farhana",
      email: "farhana.6hossain@gmail.com",
    }).then((user) => {
      return rabbitseeds.map((rabbit) => ({ ...rabbit, owner: user._id }));
    });
  })
  .then((rabbits) => {
    return Bunny.insertMany(rabbits);
  })
  .then((rabbits) => {
    console.log(rabbits);
  })
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
