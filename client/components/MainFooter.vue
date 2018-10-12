<template lang="pug">
  v-footer(color="primary base" height="auto")
    v-layout(justify-center row wrap)
      .white--text Copyright &copy; {{year}} Martin Fracker. All Rights Reserved.
</template>

<script>
export default {
  computed: {
    year() {
      const date = new Date();
      return date.getFullYear();
    }
  }
};
</script>
