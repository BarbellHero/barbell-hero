<template lang="pug">
  crud-list(
    api="workout"
    baseRoute="/admin/workouts"
    title="Workouts"
  )
</template>

<script>
import CrudList from "~/components/crud/list";

export default {
  components: {
    CrudList
  }
};
</script>
