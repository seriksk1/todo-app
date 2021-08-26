const Room = require("../models/room-model");

const createRoom = async (body) => {
  try {
    const { name, capacity, type, owner } = body;

    const newRoom = await new Room({
      name: name,
      capacity: capacity,
      type: type,
      owner: owner,
    });

    newRoom.save();

    return newRoom;
  } catch (err) {
    throw err;
  }
};

const getRooms = async () => {
  try {
    const rooms = await Room.find({});
    return rooms;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createRoom,
  getRooms,
};
