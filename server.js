const express = require("express");
const favicon = require("serve-favicon");
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
const res = require("express/lib/response");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
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

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use("/", oAuthRoute);
app.use("/users", userRoute);
app.use("/rabbits", bunnyRoute);

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`);
});
