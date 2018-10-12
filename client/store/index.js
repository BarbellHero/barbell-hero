import { service } from "~/plugins/feathers-client";

export const state = () => ({});

export const mutations = {};

export const plugins = [
  service("movement-type", {
    idField: "id",
    state: {
      editing: {}
    },

    actions: {
      editWithId({ commit, getters }, id) {
        const movementType = getters.get(id);
        commit("setEditing", movementType);
      }
    },

    mutations: {
      setEditing(state, movementType) {
        state.editing = movementType;
      },
      updateEditing(state, changes) {
        Object.assign(state.editing, changes);
      }
    }
  })
];
