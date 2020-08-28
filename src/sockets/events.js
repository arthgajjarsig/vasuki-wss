const utils = require('../utils');
const M = require('./../__mocks__/device');

const onClose = (code, reason) => {
  utils.log("Client disconnected:", code, reason);
};

const onMessage = (event) => {
  utils.log("from Client :", event);
};

exports.onConnection = (ws) => {
  utils.log("Client connected");
  ws.on("message", onMessage);
  ws.on("close", onClose);
};

exports.forEachClient = (client) => {
  client.send(JSON.stringify(M.deviceInfo()));
};