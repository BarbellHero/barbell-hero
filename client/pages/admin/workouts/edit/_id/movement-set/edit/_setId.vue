<template lang="pug">
  crud-edit(title="Edit Set" api="movement-set")
    movement-set-form
</template>

<script>
import CrudEdit from "~/components/crud/edit";
import MovementSetForm from "~/components/forms/movement-set";

export default {
  components: {
    CrudEdit,
    MovementSetForm
  },
  async fetch({ app, params }) {
    await app.$apiDispatch("movement/find");
    await app.$crudBeginEdit("movement-set", params.setId);
  }
};
</script>
