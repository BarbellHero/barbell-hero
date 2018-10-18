<template lang="pug">
  v-form(@submit.prevent ref="form")
    v-select(
      v-model="movementId"
      :items="entries"
      item-text="name"
      item-value="id"
      label="Movement"
      :rules="movementIdRules")
    v-text-field(
      v-model.number="weight" 
      number
      label="Weight" 
      :rules="weightRules")
    v-text-field(
      v-model.number="repetitions" 
      number
      label="Repititions" 
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
      weightRules: [required],
      repetitionRules: [required]
    };
  },
  ...crudOptions(
    "movement-set",
    ["movementId", "weight", "repetitions", "amrap"],
    {
      computed: {
        entries() {
          return this.$apiGet("movement/list");
        }
      }
    }
  ),
  created() {
    this.$apiCommit("movement-set/updateEditing", {
      workoutId: this.$route.params.id
    });
  }
};
</script>
