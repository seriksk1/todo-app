const express = require("express");
const passport = require("passport");
const router = express.Router();

const AuthCtrl = require("../controllers/auth-ctrl");

router.post("/register", AuthCtrl.createUser);
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  AuthCtrl.getUserToken
);

module.exports = router;
