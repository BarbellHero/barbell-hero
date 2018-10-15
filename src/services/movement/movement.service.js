// Initializes the `movement` service on path `/api/movement`
const createService = require("feathers-sequelize");
const createModel = require("../../models/movement.model");
const hooks = require("./movement.hooks");

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get("paginate");

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use("/api/movement", createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/movement");

  service.hooks(hooks);
};
