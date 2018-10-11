/* eslint-disable no-console */
const logger = require('./logger');
const consola = require('consola');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

process.on('nuxt:build:done', err => {
  if (err) {
    consola.error(err)
    process.exit(1)
  }
  server.on('listening', () =>
    consola.ready({
      message: `Feathers application started on ${app.get('host')}:${port}`,
      badge: true
    })
  )
})
