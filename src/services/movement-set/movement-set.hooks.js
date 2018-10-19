const { authenticate } = require("@feathersjs/authentication").hooks;
const sequelizeInclude = require("../../hooks/sequelize-include");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [sequelizeInclude(models => [models.movement])],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
