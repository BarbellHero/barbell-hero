<template lang="pug">
  div
    v-toolbar.grey--text.text--darken-3(flat)
      v-btn(icon @click.stop="back()")
        v-icon(color="grey darken-3") arrow_back_ios
      v-toolbar-title {{title}}
    v-divider
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
