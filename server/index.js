const express = require("express");
const session = require("express-session");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const { handleError } = require("./middleware/error");
const verifyToken = require("./middleware/verify");

const passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login");

require("./db");
const taskRouter = require("./routes/task-router");
const authRouter = require("./routes/auth-router");
const User = require("./models/user-model");

const app = express();
const API_PORT = process.env.PORT || 3001;

app.use(
  session({
    secret: "supersecretsecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api", connectEnsureLogin.ensureLoggedIn());

app.use("/auth", authRouter);
app.use("/api", taskRouter);

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));
