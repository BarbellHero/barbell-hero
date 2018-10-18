module.exports = function(getModelsFn) {
  return context => {
    const sequelize = context.app.get("sequelizeClient");
    const models = getModelsFn(sequelize.models);
    context.params.sequelize = {
      include: models
    };
    return context;
  };
};
