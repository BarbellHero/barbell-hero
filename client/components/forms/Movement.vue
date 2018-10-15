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
import { crudOptions } from "~/plugins/crud";

export default {
  data() {
    return {
      nameRules: [required],
      movementTypeIdRules: [required]
    };
  },
  ...crudOptions("movement", ["name", "movementTypeId"])
};
</script>
