const ChatService = require("../services/chat-service");
const bodyValidator = require("./bodyValidator");
const { SOCKET_EVENT } = require("../constants");

module.exports = (io, socket) => {
  // const userJoin = (roomId) => {
  //   socket.join(roomId);
  //   socket.to(roomId).emit(SOCKET_EVENT.SERVER.JOIN_ROOM, socket.id);
  // };
  // const userLeave = (roomId) => {
  //   socket.leave(roomId);
  //   socket.to(roomId).emit(SOCKET_EVENT.SERVER.LEAVE_ROOM, socket.id);
  // };
  // socket.on(SOCKET_EVENT.CLIENT.LEAVE_ROOM, userLeave);
  // socket.on(SOCKET_EVENT.CLIENT.JOIN_ROOM, userJoin);
};
