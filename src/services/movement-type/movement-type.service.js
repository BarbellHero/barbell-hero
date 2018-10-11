// Initializes the `movement-type` service on path `/movement-type`
import createService from 'feathers-sequelize'
import createModel from '../../models/movement-type.model'
import hooks from './movement-type.hooks'

export default function (app) {
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
};
