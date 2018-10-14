import Vue from "vue";

function install(Vue) {
  Vue.prototype.$dispatch = async function(action, payload) {
    try {
      await this.$store.dispatch(action, payload);
    } catch (error) {
      if (error.errors) {
        error.errors.forEach(e => {
          this.$notify({
            type: "error",
            title: "Error",
            text: e.message
          });
        });
      } else {
        this.$notify({
          type: "error",
          title: "Error",
          text: error.message
        });
      }
      throw error;
    }
  };
}

Vue.use({ install });
