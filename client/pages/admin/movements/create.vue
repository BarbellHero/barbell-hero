<template lang="pug">
  crud-create(
    api="movement-type"
    title="New Movement Type"
    model="MovementType"
  )
    movement-type-form
</template>

<script>
import CrudCreate from "~/components/crud/create";
import MovementTypeForm from "~/components/forms/MovementType";

export default {
  components: {
    CrudCreate,
    MovementTypeForm
  }
};
</script>
