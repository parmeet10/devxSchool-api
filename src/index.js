import express from "express";
import { WebSocket, WebSocketServer } from "ws";

const app = express();
const port = 3000;

// Healthcheck routes
app.get("/ping", (req, res) => {
  res.send("pong");
});

const server = app.listen(port, () => {
  console.log(`${new Date()}`);
  console.log(`Server running on port:${port}`);
});

const wsServer = new WebSocketServer({ server });

const clients = {};
const userActivity = {};

wsServer.on("connection", function (connection, request) {
  console.log("RECIVED A NEW CONNECTION");

  let userId = new URL(
    request.url,
    `http://${request.headers.host}`
  ).searchParams.get("userId");

  if (!userId) {
    console.log("MANDATORY INPUT MISSING['userId']");
    connection.close(1003); // status code for unsupoorted data;
  } else {
    clients[userId] = connection;
    console.log(`${userId} CONNECTED SUCCESSFUllY`);
    if (userActivity[userId]) {
      connection.send(userActivity[userId].message);
    }
  }

  connection.on("message", (message) => {
    handleMessage(message, userId);
  });
  connection.on("close", (code) => handleDisconnect(code, userId));
});

const handleMessage = (message, userId) => {
  let clientData = JSON.parse(message.toString());

  if (!userActivity[userId]) userActivity[userId] = clientData;
  else {
    if (userActivity[userId].message !== clientData.message)
      userActivity[userId].message = userActivity[userId].message.concat(
        " ",
        clientData.message
      );
  }
  return;
};

const handleDisconnect = (code, userId) => {
  if (userId && code == 1000)
    console.log(`${userId} DISCONNECTED SUCCESSFUllY`);
  return;
};
