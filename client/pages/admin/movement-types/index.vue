<template lang="pug">
  div
    page-header(title="Movement Types")
    navigation(:items="items" loopKey="id")
    bottom-navigation
      v-btn(icon="save" nuxt to="/admin/movement-types/create")
        span Create
        v-icon add_circle_outline
</template>

<script>
import BottomNavigation from "~/components/BottomNavigation";
import PageHeader from "~/components/PageHeader";
import Navigation from "~/components/Navigation";

export default {
  async fetch({ store }) {
    await store.dispatch("movement-type/find");
  },
  components: {
    BottomNavigation,
    PageHeader,
    Navigation
  },
  computed: {
    movementTypes() {
      return this.$store.getters["movement-type/list"];
    },
    items() {
      return this.movementTypes.map(movementType => ({
        title: movementType.name,
        routeToPush: `/admin/movement-types/edit/${movementType.id}`
      }));
    }
  }
};
</script>
