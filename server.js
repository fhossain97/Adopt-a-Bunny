const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080
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
const editRoute = require("./routes/editRoutes");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
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

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

module.exports = app

app.use("/", oAuthRoute);
app.use("/users", userRoute);
app.use("/rabbits", bunnyRoute);
app.use("/rabbits", editRoute);



app.listen(PORT, ()=> {
    console.log(`Listening on PORT ${PORT}`)
})