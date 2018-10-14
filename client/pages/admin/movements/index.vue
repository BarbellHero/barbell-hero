<template lang="pug">
  crud-list(
    api="movement-type"
    baseRoute="/admin/movement-types"
    title="Movement Types"
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
