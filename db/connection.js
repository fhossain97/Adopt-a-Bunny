const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/adoptABunny", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Connected at ${db.host}:${db.port}`);
});
