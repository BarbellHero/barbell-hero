"use strict";

// Initializes the `movement-type` service on path `/movement-type`
const createService = require("feathers-sequelize");
const createModel = require("../../models/movement-type.model");
const hooks = require("./movement-type.hooks");

module.exports = function(app) {
  const Model = createModel(app);

  const options = {
    Model
  };

  // Initialize our service with any options it requires
  app.use("api/movement-type", createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/movement-type");

  service.hooks(hooks);
};
