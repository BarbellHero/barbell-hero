// Initializes the `workout` service on path `/api/workout`
const createService = require("feathers-sequelize");
const createModel = require("../../models/workout.model");
const hooks = require("./workout.hooks");

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get("paginate");

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use("/api/workout", createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/workout");

  service.hooks(hooks);
};
