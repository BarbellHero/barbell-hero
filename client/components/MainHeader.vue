<template lang="pug">
  .toolbar
    main-navigation
    v-toolbar(color="primary base" dark fixed app)
      v-toolbar-side-icon(@click.stop="$emit('drawer:toggle')")
      v-toolbar-title Barbell Hero
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
export default {
  components: {
    MainNavigation
  },
  methods: {
    goHome() {},
    goToContacts() {}
  }
};
</script>
