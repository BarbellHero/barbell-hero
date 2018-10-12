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
  },
  async save({ getters }) {
    const editing = getters.editing;
    await this.$axios.$put(`movement-type/${editing.id}`, editing);
  },
  async remove({ getters }) {
    const id = getters.editing.id;
    await this.$axios.$delete(`movement-type/${id}`);
  },
  async create({ getters }) {
    const editing = getters.editing;
    await this.$axios.$post(`movement-type`, editing);
  }
};

export const mutations = {
  fetchAll(state, movementTypes) {
    state.all = movementTypes;
  },
  setEditing(state, movementType) {
    state.editing = movementType;
  },
  updateEditing(state, changes) {
    Object.assign(state.editing, changes);
  }
};
