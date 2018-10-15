<template lang="pug">
  v-app
    notifications
    main-navigation
    main-header
    v-content
      nuxt
</template>

<script>
import MainFooter from "../components/main-footer.vue";
import MainHeader from "../components/main-header.vue";
import MainNavigation from "../components/main-navigation.vue";
export default {
  components: {
    MainFooter,
    MainHeader,
    MainNavigation
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    goHome() {},
    goToContacts() {}
  }
};
</script>

<style>
body {
  font-family: "Roboto";
}
</style>
