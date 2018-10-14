<template lang="pug">
  v-menu(offset-y)
    v-btn(icon slot="activator")
      v-icon more_vert
    v-list
      v-list-tile(@click="logout()")
        v-list-tile-title Logout
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    }
  }
};
</script>
