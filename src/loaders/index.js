/**
 * @file loaders/index.js
 * @description all the loaders required for the server are here
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 */



// modules import
const utils = require('./../utils');
const expressLoader = require('./express');
const websocketsLoader = require('./websockets');

module.exports = async () => {

  await expressLoader();
  utils.success('Express Intialized');

  await websocketsLoader();
  utils.success('WebSockets Intialized');

};