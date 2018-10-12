export const state = () => ({
  all: {},
  editing: {}
});

export const getters = {
  all: state => state.all,
  editing: state => state.editing
};

export const actions = {
  async fetchAll({ commit }) {
    const movementTypes = await this.$axios.$get("movement-type");
    commit("fetchAll", movementTypes);
  },
  async editWithId({ commit }, id) {
    const movementType = await this.$axios.$get(`movement-type/${id}`);
    commit("setEditing", movementType);
  }
};

export const mutations = {
  fetchAll(state, movementTypes) {
    state.all = movementTypes;
  },
  setEditing(state, movementType) {
    state.editing = movementType;
  }
};
