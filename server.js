const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const Rabbit = require("./models/bunny");
const User = require("./models/user");

require("dotenv").config();
require("./db/connection");
require("./db/passport");

const userRoute = require("./routes/userRoutes");
const bunnyRoute = require("./routes/bunnyRoutes");
const oAuthRoute = require("./routes/oAuth");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "Bunnies!",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", oAuthRoute);
app.use("/rabbits", userRoute);
app.use("/rabbits", bunnyRoute);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`);
});
