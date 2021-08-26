const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
require("./db");

const { verifyToken } = require("./middleware/verify");
const { handleError } = require("./middleware/error");

const taskRouter = require("./routes/task-router");
const authRouter = require("./routes/auth-router");
const roomRouter = require("./routes/room-router");

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
app.use("/chat", [verifyToken]);

app.use("/auth", authRouter);
app.use("/api", taskRouter);
app.use("/chat", roomRouter);

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
const { SOCKET_EVENT } = require("./constants");
// const registerRoomsHandlers = require("./helpers/roomsHandler");

const onConnection = (socket) => {
  // registerRoomsHandlers(io, socket);
  registerChatHandlers(io, socket);
};

io.sockets.on("connection", onConnection);

httpServer.listen(API_PORT, () =>
  console.log(`Server running on port ${API_PORT}`)
);
