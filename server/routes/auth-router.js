const express = require("express");
const router = express.Router();

const AuthCtrl = require("../controllers/auth-ctrl");

router.post("/register", AuthCtrl.createUser);
router.post("/login", AuthCtrl.getUserToken);

module.exports = router;
