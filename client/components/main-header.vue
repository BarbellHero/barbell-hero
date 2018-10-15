<template lang="pug">
  .toolbar
    main-navigation
    v-toolbar(color="primary base" dark fixed app)
      v-toolbar-side-icon(@click.stop="$emit('drawer:toggle')")
      v-toolbar-title Barbell Hero
      v-spacer
      main-menu
</template>

<script>
import MainMenu from "../components/main-menu.vue";
import MainNavigation from "../components/main-navigation.vue";
export default {
  components: {
    MainMenu,
    MainNavigation
  },
  methods: {
    goHome() {},
    goToContacts() {}
  }
};
</script>
