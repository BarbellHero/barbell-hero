"use strict";

const path = require("path");
const favicon = require("serve-favicon");
const helmet = require("helmet");
const cors = require("cors");

const express = require("@feathersjs/express");
const feathers = require("@feathersjs/feathers");
const configuration = require("@feathersjs/configuration");

const api = require("./api");

const renderer = require("./renderer");

const app = express(feathers());
app.configure(configuration());

// Enable security, CORS, and favicon
app.use(cors());
app.use(favicon(path.join(app.get("public"), "favicon.ico")));
app.use(helmet());

// Mount api microservice
app.configure(api);

// Configure renderer
app.use(renderer);

module.exports = app;
