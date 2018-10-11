import path from 'path'
import favicon from 'serve-favicon'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import logger from './logger'

import feathers from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express'
import socketio from '@feathersjs/socketio'

import middleware from './middleware'
import services from './services'
import appHooks from './app.hooks'
import channels  from './channels'

import renderer from './renderer'
import sequelize from './sequelize'

const app = express(feathers())

// Load app configuration
app.configure(configuration())
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet())
app.use(cors())
app.use(compress())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(favicon(path.join(app.get('public'), 'favicon.ico')))

// Set up Plugins and providers
app.configure(express.rest())
app.configure(socketio())

app.configure(sequelize)

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware)
// Set up our services (see `services/index.js`)
app.configure(services)
// Set up event channels (see channels.js)
app.configure(channels)

// Configure a middleware for the error handler and the renderer
app.use(express.errorHandler({ logger }))
app.use(renderer)

app.hooks(appHooks)

export default app
