<template lang="pug">
  #app
    main-header
    nuxt
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
export default {
  components: {
    MainHeader
  }
};
</script>

<style>
body {
  font-family: "Roboto";
}
</style>
