<template lang="pug">
  crud-create(
    api="movement-set"
    title="New Set"
    model="MovementSet"
  )
    movement-set-form
</template>

<script>
import CrudCreate from "~/components/crud/create";
import MovementSetForm from "~/components/forms/movement-set";

export default {
  components: {
    CrudCreate,
    MovementSetForm
  },
  async fetch({ app }) {
    await app.$apiDispatch("movement/find");
  }
};
</script>
