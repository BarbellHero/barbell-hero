<template lang="pug">
  v-app
    main-navigation
    main-header
    v-content
      nuxt
    main-footer
</template>

<script>
import MainFooter from "../components/MainFooter.vue";
import MainHeader from "../components/MainHeader.vue";
import MainNavigation from "../components/MainNavigation.vue";
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
