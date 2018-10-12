"use strict";

const path = require("path");
const favicon = require("serve-favicon");
const helmet = require("helmet");
const cors = require("cors");
const compress = require("compression");
const logger = require("./logger");

const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");
const feathers = require("@feathersjs/feathers");
const configuration = require("@feathersjs/configuration");

const middleware = require("./middleware");
const services = require("./services");
const appHooks = require("./app.hooks");
const channels = require("./channels");

const renderer = require("./renderer");

const sequelize = require("./sequelize");

const app = express(feathers());
app.configure(configuration());

// Enable security, CORS, and favicon
app.use(cors());
app.use(favicon(path.join(app.get("public"), "favicon.ico")));
app.use(helmet());

// Mount api microservice
// Enable compression, and body parsing
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Plugins and providers
app.configure(socketio());

app.configure(sequelize);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for the error handler
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

// Configure renderer
app.use(renderer);

module.exports = app;
