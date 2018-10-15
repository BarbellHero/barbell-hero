<template lang="pug">
  crud-edit(api="movement")
    movement-form
</template>

<script>
import CrudEdit from "~/components/crud/edit";
import MovementForm from "~/components/forms/movement";

export default {
  components: {
    CrudEdit,
    MovementForm
  },
  async fetch({ app, params }) {
    await app.$apiDispatch("movement-type/find");
    await app.$crudBeginEdit("movement", params.id);
  }
};
</script>
