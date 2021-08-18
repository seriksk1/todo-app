const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
require("./db");

const { verifyToken } = require("./middleware/verify");
const { handleError } = require("./middleware/error");

const taskRouter = require("./routes/task-router");
const authRouter = require("./routes/auth-router");

const app = express();
const API_PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", [verifyToken]);
app.use("/auth", authRouter);
app.use("/api", taskRouter);

app.use((err, req, res, next) => {
  handleError(err, res);
});

// ---------------- socket.io ---------------- //

const options = {
  cors: {
    allowedHeaders: ["Access-Control-Allow-Origin"],
  },
};

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, options);
const registerChatHandlers = require("./helpers/chatHandler");
const { QueryError } = require("./helpers/errorHandler");
const { HTTP_STATUS } = require("./constants");
const { getDecodedToken } = require("./middleware/verify");

const onConnection = (socket) => {
  registerChatHandlers(io, socket);
};

// io.use((socket, next) => {
//   try {
//     const token = socket.handshake.query.token;
//     if (token) {
//       const decoded = getDecodedToken(token);
//       socket.decode = decoded;
//     } else {
//       throw new QueryError(HTTP_STATUS.UNAUTHORIZED, "User is not authorized!");
//     }
//     next();
//   } catch (err) {
//     socket.err = err;
//     next();
//   }
// });

// io.use((socket, next) => {
//   if (socket.err) {
//     handleError(socket.err);
//   } else {
//     next();
//   }
// });

io.on("connection", onConnection);

httpServer.listen(API_PORT, () =>
  console.log(`Server running on port ${API_PORT}`)
);
