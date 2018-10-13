import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";
import feathersVuex from "feathers-vuex";
import Vue from "vue";

//import auth from "@feathersjs/authentication-client";

const port = process.env.PORT || 3000;
const socket = io("http://localhost:" + port, { transports: ["websocket"] });

const feathersClient = feathers().configure(socketio(socket));
//.configure(auth({ storage: window.localStorage }))

const { service, FeathersVuex } = feathersVuex(feathersClient, {
  idField: "id"
});

Vue.use(FeathersVuex);

export { service };
