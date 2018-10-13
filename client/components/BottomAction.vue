<template lang="pug">
  v-btn(flat :value="true" @click="click()")
    span
      slot
    v-icon {{icon}}
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>
