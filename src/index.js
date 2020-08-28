/**
 * @file index.js
 * @description Entry point of App
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 * @version 1.0
 */




//
// ─────────────────────────────────────────────────────────────── SERVER ─────
//


// modules import
const utils = require("./utils");
const loaders = require('./loaders');

const startServer = async () => {

  await loaders();
  utils.info("LOADERS", "DONE");

};




//
// ────────────────────────────────────────────────────────── INIT APP ─────
//

utils.initApp();

// Starting Server
startServer();