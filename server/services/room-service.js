const Room = require("../models/room-model");

const createRoom = async (body) => {
  try {
    const { name, capacity, type, isPrivate, owner } = body;

    const newRoom = await new Room({
      name: name,
      capacity: capacity,
      type: type,
      isPrivate: isPrivate,
      owner: owner,
    });

    newRoom.save();

    return newRoom;
  } catch (err) {
    throw err;
  }
};

const userJoin = async (roomId) => {
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: roomId },
      { users: [] },
      {
        new: true,
      }
    );
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
  userJoin,
  getRooms,
};
