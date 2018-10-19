// Initializes the `movement-set` service on path `/api/movement-set`
const createService = require("feathers-sequelize");
const createModel = require("../../models/movement-set.model");
const hooks = require("./movement-set.hooks");

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get("paginate");

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use("/api/movement-set", createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/movement-set");

  service.hooks(hooks);
};
