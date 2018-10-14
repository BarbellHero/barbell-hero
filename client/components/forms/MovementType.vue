<template lang="pug">
  v-form(@submit.prevent ref="form")
    v-text-field(v-model="name" label="Name" :rules="nameRules")
</template>

<script>
import { required } from "~/plugins/form-validation";

export default {
  data() {
    return {
      nameRules: [required]
    };
  },
  computed: {
    movementType() {
      return this.$apiState("movement-type").editing;
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
  mounted() {
    this.$apiCommit(
      "movement-type/setEditingIsValid",
      this.$refs.form.validate()
    );
    this.$refs.form.resetValidation();
  },
  methods: {
    updateEditing(changes) {
      this.$apiCommit("movement-type/updateEditing", changes);
      this.$apiCommit(
        "movement-type/setEditingIsValid",
        this.$refs.form.validate()
      );
    }
  }
};
</script>
