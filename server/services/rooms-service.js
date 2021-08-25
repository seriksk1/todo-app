const Room = require("../models/room-model");

const createRoom = async () => {
  try {
    console.log("room created");
  } catch (err) {
    console.log(err);
  }
};

const joinRoom = async () => {
  try {
    console.log("User join");
  } catch (err) {
    console.log(err);
  }
};

const leaveRoom = async () => {
  try {
    console.log("User left");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createRoom,
  joinRoom,
  leaveRoom,
};
