module.exports = {
  mode: "spa",
  head: {
    titleTemplate: "Barbell Hero",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A workout tracker that stays out of your way"
      }
    ]
  },
  modules: ["@nuxtjs/vuetify"],
  plugins: [
    "~/plugins/feathers-client",
    "~/plugins/form-validation",
    "~/plugins/notifications"
  ],
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
  },
  router: {
    middleware: ["auth"]
  },
  axios: {
    prefix: "/api"
  }
};
