<template lang="pug">
  v-form(ref="form")
    v-select(
      v-model="movementId"
      :items="entries"
      item-text="name"
      item-value="id"
      label="Movement"
      :rules="movementIdRules")
    v-text-field(
      v-model.number="repetitions" 
      number
      label="Repetitions" 
      :rules="repetitionRules")
    v-checkbox(
      v-model="amrap" 
      label="AMRAP")
</template>

<script>
import { required } from "~/plugins/form-validation";
import { crudOptions } from "~/plugins/crud";

export default {
  data() {
    return {
      nameRules: [required],
      movementIdRules: [required],
      repetitionRules: [required]
    };
  },
  ...crudOptions("movement-set", ["movementId", "repetitions", "amrap"], {
    computed: {
      entries() {
        return this.$apiGet("movement/list");
      }
    }
  }),
  created() {
    this.$apiCommit("movement-set/updateEditing", {
      workoutId: this.$route.params.id
    });
  }
};
</script>
