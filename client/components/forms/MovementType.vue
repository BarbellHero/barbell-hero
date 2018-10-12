<template lang="pug">
  v-form(v-model="valid" @submit.prevent)
    v-text-field(v-model="name" label="Name" required)
</template>

<script>
export default {
  data() {
    return {
      valid: false
    };
  },
  computed: {
    movementType() {
      return this.$store.state["movement-type"].editing;
    },
    name: {
      get() {
        return this.movementType.name;
      },
      set(value) {
        this.updateEditing({ name: value });
      }
    }
  },
  methods: {
    updateEditing(changes) {
      this.$store.commit("movement-type/updateEditing", changes);
    }
  }
};
</script>
