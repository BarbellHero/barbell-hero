export const state = () => ({
  all: {}
});

export const getters = {
  all: state => state.all
};

export const actions = {
  async fetchAll({ commit }) {
    const movementTypes = await this.$axios.$get("movement-type");
    commit("fetchAll", movementTypes);
  }
};

export const mutations = {
  fetchAll(state, movementTypes) {
    state.all = movementTypes;
  }
};
