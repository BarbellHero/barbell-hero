<template lang="pug">
  v-form(v-model="valid")
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
      return this.$store.getters["movement-types/editing"];
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
      this.$store.commit("movement-types/updateEditing", changes);
    }
  }
};
</script>
