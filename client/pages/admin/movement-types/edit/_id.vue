<template lang="pug">
  crud-edit(api="movement-type")
    movement-type-form
</template>

<script>
import CrudEdit from "~/components/crud/edit";
import MovementTypeForm from "~/components/forms/movement-type";

export default {
  components: {
    CrudEdit,
    MovementTypeForm
  },
  async fetch({ app, params }) {
    await app.$crudBeginEdit("movement-type", params.id);
  }
};
</script>
