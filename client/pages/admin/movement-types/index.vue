<template lang="pug">
  div
    page-header(title="Movement Types")
    navigation(:items="items" loopKey="id")
    v-bottom-nav(app fixed :value="true")
      v-btn(flat value="save" nuxt to="/admin/movement-types/create")
        span Create
        v-icon add_circle_outline
</template>

<script>
import PageHeader from "~/components/PageHeader";
import Navigation from "~/components/Navigation";

export default {
  async fetch({ store }) {
    await store.dispatch("movement-types/fetchAll");
  },
  components: {
    PageHeader,
    Navigation
  },
  computed: {
    movementTypes() {
      return this.$store.getters["movement-types/all"];
    },
    items() {
      return this.movementTypes.data.map(movementType => ({
        title: movementType.name,
        routeToPush: `/admin/movement-types/edit/${movementType.id}`
      }));
    }
  }
};
</script>
