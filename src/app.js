"use strict"

const path = require("path")
const favicon = require("serve-favicon")
const compress = require("compression")
const helmet = require("helmet")
const cors = require("cors")
const logger = require("./logger")

const feathers = require("@feathersjs/feathers")
const configuration = require("@feathersjs/configuration")
const express = require("@feathersjs/express")
const socketio = require("@feathersjs/socketio")

const middleware = require("./middleware")
const services = require("./services")
const appHooks = require("./app.hooks")
const channels = require("./channels")

const renderer = require("./renderer")
const sequelize = require("./sequelize")

const api = express(feathers())
const app = express(feathers())

function configureCommon(srv) {
  // Load app configuration
  srv.configure(configuration())
}

configureCommon(app)
configureCommon(api)

// Enable security, CORS, and favicon
app.use(cors())
app.use(favicon(path.join(app.get("public"), "favicon.ico")))
app.use(helmet())

// Enable compression, and body parsing
api.use(compress())
api.use(express.json())
api.use(express.urlencoded({ extended: true }))

// Set up Plugins and providers
api.configure(express.rest())
api.configure(socketio())

api.configure(sequelize)

// Configure other middleware (see `middleware/index.js`)
api.configure(middleware)
// Set up our services (see `services/index.js`)
api.configure(services)
// Set up event channels (see channels.js)
api.configure(channels)

// Configure a middleware for the error handler and the renderer
api.use(express.errorHandler({ logger }))
api.hooks(appHooks)

app.use('/api', api)
app.use(renderer)


module.exports = app
