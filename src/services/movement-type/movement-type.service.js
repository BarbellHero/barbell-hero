'use strict'

// Initializes the `movement-type` service on path `/movement-type`
const createService = require('feathers-sequelize')
const createModel = require('../../models/movement-type.model')
const hooks = require('./movement-type.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/movement-type', createService(options))

  // Get our initialized service so that we can register hooks
  const service = app.service('movement-type')

  service.hooks(hooks)
}
