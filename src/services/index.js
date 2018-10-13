"use strict";

const movementType = require("./movement-type/movement-type.service.js");

const users = require("./users/users.service.js");

module.exports = function(app) {
  app.configure(movementType);
  app.configure(users);
};
