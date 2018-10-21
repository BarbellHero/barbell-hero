<template lang="pug">
  v-form(ref="form")
    v-text-field(v-model="name" label="Name" :rules="nameRules")
</template>

<script>
import { crudOptions } from "~/plugins/crud";
import { required } from "~/plugins/form-validation";

export default {
  data() {
    return {
      nameRules: [required]
    };
  },
  ...crudOptions("movement-type", ["name"])
};
</script>
