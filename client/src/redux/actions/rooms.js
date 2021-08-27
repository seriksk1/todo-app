import axios from "axios";
import { ACTION_ROOMS } from "../constants";

const API_URI = process.env.REACT_APP_URI;

const chat = axios.create({
  baseURL: API_URI + "/chat",
});

chat.interceptors.request.use((req) => {
  req.headers["x-access-token"] = localStorage.getItem("token");
  return req;
});

export const setRooms = (items) => ({
  type: ACTION_ROOMS.SET_ROOMS,
  payload: items,
});

export const setCurrentRoom = (room) => (dispatch) => {
  localStorage.setItem("currentRoom", room._id);
  dispatch({
    type: ACTION_ROOMS.SET_CURRENT_ROOM,
    payload: room,
  });
};

export const leaveFromRoom = () => ({
  type: ACTION_ROOMS.LEAVE_FROM_ROOM,
});

export const fetchRooms = () => async (dispatch) => {
  try {
    const { data } = await chat.get("/rooms");
    const items = data.items;

    dispatch([setRooms(items)]);
  } catch (err) {
    console.log(err);
  }
};

export const addRoom = (item) => async (dispatch) => {
  try {
    const { data } = await chat.post("/room", item);
    const newItem = data.item;
    console.log(newItem);

    dispatch([addRoomSuccess(newItem)]);
  } catch (err) {
    console.log(err);
  }
};

export const addRoomSuccess = (item) => ({
  type: ACTION_ROOMS.ADD_ROOM,
  payload: item,
});
