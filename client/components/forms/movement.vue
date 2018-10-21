<template lang="pug">
  v-form(ref="form")
    v-text-field(
      v-model="name" 
      label="Name" 
      :rules="nameRules")
    v-select(
      v-model="movementTypeId"
      :items="entries"
      item-text="name"
      item-value="id"
      label="Movement Type"
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
  ...crudOptions("movement", ["name", "movementTypeId"], {
    computed: {
      entries() {
        return this.$apiGet("movement-type/list");
      }
    }
  })
};
</script>
