"use strict"

const movementType = require("./movement-type/movement-type.service.js")

module.exports = function(app) {
  app.configure(movementType)
}
