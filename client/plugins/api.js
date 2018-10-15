import Vue from "vue";

export function convertToStoreSymbol(apiSymbol) {
  return `api/${apiSymbol}`;
}

export default ({ store }, inject) => {
  inject("apiDispatch", async (apiAction, payload) => {
    try {
      const action = convertToStoreSymbol(apiAction);
      await store.dispatch(action, payload);
    } catch (error) {
      if (error.errors && error.errors.length) {
        error.errors.forEach(e => {
          Vue.notify({
            type: "error",
            title: "Error",
            text: e.message
          });
        });
      } else {
        Vue.notify({
          type: "error",
          title: "Error",
          text: error.message
        });
      }
      throw error;
    }
  });

  inject("apiGet", apiGetter => {
    const getter = convertToStoreSymbol(apiGetter);
    return store.getters[getter];
  });

  inject("apiCommit", (apiMutation, payload) => {
    const mutation = convertToStoreSymbol(apiMutation);
    store.commit(mutation, payload);
  });

  inject("apiState", apiState => {
    const state = convertToStoreSymbol(apiState);
    return store.state[state];
  });
};
