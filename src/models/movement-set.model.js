// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const movementSet = sequelizeClient.define(
    "movement_set",
    {
      repetitions: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      amrap: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  movementSet.associate = function(models) {};

  return movementSet;
};
