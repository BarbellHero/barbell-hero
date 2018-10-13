import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";
import feathersVuex from "feathers-vuex";
import Vue from "vue";
import authentication from "@feathersjs/authentication-client";

const location = window.location;
let socketUrl = `${location.protocol}//${location.hostname}`;
if (process.env.NODE_ENV !== "production") {
  socketUrl += ":3000";
}
const socket = io(socketUrl, { transports: ["websocket"] });

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(authentication({ storage: window.localStorage }));

const { service, FeathersVuex, auth } = feathersVuex(feathersClient, {
  idField: "id"
});

Vue.use(FeathersVuex);

export { service, auth };
