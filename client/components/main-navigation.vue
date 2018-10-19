<template lang="pug">
  v-navigation-drawer(v-model="isOpen" fixed app)
    v-list(dense)
      v-list-tile(v-for="item in items" nuxt :to="item.path")
        v-list-tile-action
          v-icon {{item.icon}}
        v-list-tile-content
          v-list-tile-title {{item.title}}
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: [
        {
          path: "/",
          icon: "home",
          title: "Home"
        },
        {
          path: "/sessions",
          icon: "fitness_center",
          title: "Sessions"
        },
        {
          path: "/admin",
          icon: "settings",
          title: "Admin"
        }
      ]
    };
  },
  created() {
    this.$parent.$on("drawer:toggle", () => (this.isOpen = !this.isOpen));
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goToAdmin() {
      this.$router.push("/admin");
    },
    goToSessions() {
      this.$router.push("/sessions");
    }
  }
};
</script>
