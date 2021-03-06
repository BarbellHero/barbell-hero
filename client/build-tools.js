"use strict";

const { resolve } = require("path");
const { Nuxt, Builder } = require("nuxt");
let config;
try {
  config = require("./nuxt.config.js");
} catch (e) {
  console.log("did not find a nuxt config", e);
  process.exit(1);
}

const isProd = ["production", "test"].includes(process.env.NODE_ENV);
config.dev = !isProd;
config.test = process.env.NODE_ENV === "test";
config.rootDir = resolve(__dirname, "..");
config.srcDir = resolve(__dirname);
const renderer = new Nuxt(config);
const builder = new Builder(renderer);

module.exports = {
  renderer,
  builder,
  config
};
