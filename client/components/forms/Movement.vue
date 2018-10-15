<template lang="pug">
  v-form(@submit.prevent ref="form")
    v-text-field(
      v-model="name" 
      label="Name" 
      :rules="nameRules")
    v-text-field(
      v-model.number="movementTypeId"
      label="Movement Type"
      number
      :rules="movementTypeIdRules")
</template>

<script>
import { required } from "~/plugins/form-validation";

export default {
  data() {
    return {
      nameRules: [required],
      movementTypeIdRules: [required]
    };
  },
  computed: {
    movement() {
      return this.$apiState("movement").editing;
    },
    name: {
      get() {
        return this.movement.name;
      },
      set(value) {
        this.updateEditing({ name: value });
      }
    },
    movementTypeId: {
      get() {
        return this.movement.movementTypeId;
      },
      set(value) {
        this.updateEditing({ movementTypeId: value });
      }
    }
  },
  mounted() {
    this.$apiCommit("movement/setEditingIsValid", this.$refs.form.validate());
    this.$refs.form.resetValidation();
  },
  methods: {
    updateEditing(changes) {
      this.$apiCommit("movement/updateEditing", changes);
      this.$apiCommit("movement/setEditingIsValid", this.$refs.form.validate());
    }
  }
};
</script>
