"use strict";

const { builder, renderer, config } = require("../client/build-tools.js");

if (config.dev) {
  builder.build().then(() => process.emit("nuxt:build:done"));
} else {
  process.nextTick(() => process.emit("nuxt:build:done"));
}

// Add nuxt.js middleware
module.exports = function(req, res) {
  renderer.render(req, res);
};
