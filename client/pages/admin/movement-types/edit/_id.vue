<template lang="pug">
  div
    page-header(:title="movementType.name")
    span editing a movement type: {{movementType.name}}!
</template>

<script>
import PageHeader from "~/components/PageHeader";

export default {
  async fetch({ store, params }) {
    await store.dispatch("movement-types/editWithId", params.id);
  },
  components: {
    PageHeader
  },
  computed: {
    movementType() {
      return this.$store.getters["movement-types/editing"];
    }
  }
};
</script>
