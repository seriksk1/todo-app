const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const { handleError } = require("./middleware/error");
// const verifyToken = require("./middleware/verify");

dotenv.config({ path: "./.env" });

const db = require("./db");
const taskRouter = require("./routes/task-router");
const authRouter = require("./routes/auth-router");

const app = express();
const API_PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// ----------------- Passport auth started here ----------------- //

const User = require("./models/user-model");
const SECRET = process.env.TOKEN_KEY;

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

const opts = {};

opts.expiresIn = "1h";
opts.jwtFromRequest = ExtractJwt.fromHeader("x-access-token");
opts.secretOrKey = process.env.TOKEN_KEY;

const jwtStrategy = new JwtStrategy(opts, async (payload, done) => {
  return await User.findOne({ _id: payload.user_id }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

passport.use("jwt", jwtStrategy);

const authenticate = passport.authenticate("jwt", { session: false });

// app.use("/api", [verifyToken]);
app.use("/api", [authenticate]);

app.use("/auth", authRouter);
app.use("/api", taskRouter);

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));
