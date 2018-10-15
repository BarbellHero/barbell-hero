<template lang="pug">
  crud-list(
    api="movement"
    baseRoute="/admin/movements"
    title="Movements"
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
