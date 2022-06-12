const router = require("express").Router();
const passport = require("passport");

router.get("/", function (req, res) {
  res.redirect("/rabbits");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/rabbits",
    failureRedirect: "/rabbits",
  })
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/rabbits");
  });
});

module.exports = router;
