const { resolve } = require("path");

module.exports = {
  srcDir: resolve(__dirname),
  mode: "spa",
  head: {
    titleTemplate: "Barbell Hero",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A Feathers + Nuxt demo/boilerplate"
      }
    ]
  },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  watchers: {
    webpack: {
      poll: 1000
    }
  }
};
