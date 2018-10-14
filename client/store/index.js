import { auth, service } from "~/plugins/feathers-client";

export const state = () => ({});

export const mutations = {};

export const plugins = [
  auth({
    userService: "api/users",
    namespace: "api/auth",
    state: {
      publicPages: ["login", "signup"]
    },
    getters: {
      authenticated: state => !!state.payload
    }
  }),
  service("api/users", {
    idField: "id",
    nameStyle: "path"
  }),
  service("api/movement-type", {
    idField: "id",
    nameStyle: "path",
    state: {
      editing: {},
      editingIsValid: undefined
    },

    getters: {
      editingIsValid: state => state.editingIsValid
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
      },
      setEditingIsValid(state, valid) {
        state.editingIsValid = valid;
      }
    }
  })
];
