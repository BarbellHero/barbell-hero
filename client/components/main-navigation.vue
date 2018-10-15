<template lang="pug">
  v-navigation-drawer(v-model="isOpen" fixed app)
    v-list(dense)
      v-list-tile(@click="goHome()")
        v-list-tile-action
          v-icon home
        v-list-tile-content
          v-list-tile-title Home
      v-list-tile(@click="goToAdmin()")
        v-list-tile-action
          v-icon settings
        v-list-tile-content
          v-list-tile-title Admin
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
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
    }
  }
};
</script>
