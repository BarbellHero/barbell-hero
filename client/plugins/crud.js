// TODO: this will eventually make crud components global

export default ({ app }, inject) => {
  inject("crudBeginEdit", async (apiResource, id) => {
    await app.$apiDispatch(`${apiResource}/editWithId`, id);
  });
};
