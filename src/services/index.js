"use strict";

const movementType = require("./movement-type/movement-type.service.js");

const users = require("./users/users.service.js");

const movement = require("./movement/movement.service.js");

const movementSet = require("./movement-set/movement-set.service.js");

const workout = require("./workout/workout.service.js");

module.exports = function(app) {
  app.configure(movementType);
  app.configure(users);
  app.configure(movement);
  app.configure(movementSet);
  app.configure(workout);
};
