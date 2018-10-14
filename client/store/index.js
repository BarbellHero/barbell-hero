import { auth, service } from "~/plugins/feathers-client";

export const state = () => ({});

export const mutations = {};

export const plugins = [
  auth({
    userService: "users",
    state: {
      publicPages: ["login", "signup"]
    },
    getters: {
      authenticated: state => !!state.payload
    }
  }),
  service("api/users", {
    idField: "id"
  }),
  service("api/movement-type", {
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
