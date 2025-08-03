// socket/app.js

import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  // Find if the user already exists
  const userIndex = onlineUser.findIndex((user) => user.userId === userId);

  if (userIndex !== -1) {
    // If user exists, update their socketId to the newest one
    onlineUser[userIndex].socketId = socketId;
  } else {
    // If user doesn't exist, add them to the array
    onlineUser.push({ userId, socketId });
  }
  console.log("Users online:", onlineUser);
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen("4000");
