<template lang="pug">
  div
    page-header(title="Movement Types")
    page-content
      span Movement Types
</template>

<script>
import PageHeader from "~/components/PageHeader";
import PageContent from "~/components/PageContent";

export default {
  components: {
    PageHeader,
    PageContent
  },
  mounted() {
    this.$store.dispatch("movement-types/fetchAll");
  }
};
</script>
