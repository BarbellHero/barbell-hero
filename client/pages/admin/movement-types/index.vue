<template lang="pug">
  div
    page-header(title="Movement Types")
    navigation(:items="items" loopKey="id")
    bottom-navigation
      v-btn(nuxt to="/admin/movement-types/create")
        span Create
        v-icon add_circle_outline
</template>

<script>
import BottomNavigation from "~/components/BottomNavigation";
import PageHeader from "~/components/PageHeader";
import Navigation from "~/components/Navigation";

export default {
  async fetch({ app }) {
    await app.$apiDispatch("movement-type/find");
  },
  components: {
    BottomNavigation,
    PageHeader,
    Navigation
  },
  computed: {
    movementTypes() {
      return this.$apiGet("movement-type/list");
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
