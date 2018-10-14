<template lang="pug">
  crud-edit(api="movement-type")
    movement-type-form
</template>

<script>
import CrudEdit from "~/components/crud/edit";
import MovementTypeForm from "~/components/forms/MovementType";

export default {
  components: {
    CrudEdit,
    MovementTypeForm
  },
  fetch({ app, params }) {
    app.$apiDispatch("movement-type/editWithId", params.id);
  }
};
</script>
