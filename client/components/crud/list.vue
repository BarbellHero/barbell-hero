<template lang="pug">
  div
    page-header(:title="title")
    navigation(:items="navItems" loopKey="id")
    bottom-navigation
      v-btn(nuxt :to="`${baseRoute}/create`")
        span Create
        v-icon add_circle_outline
</template>

<script>
import BottomNavigation from "~/components/bottom-navigation";
import PageHeader from "~/components/page-header";
import Navigation from "~/components/navigation";

export default {
  components: {
    BottomNavigation,
    PageHeader,
    Navigation
  },
  props: {
    api: {
      type: String,
      required: true
    },
    baseRoute: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    list() {
      return this.$apiGet(`${this.api}/list`);
    },
    navItems() {
      return this.list.map(item => ({
        title: item.name,
        routeToPush: `${this.baseRoute}/edit/${item.id}`
      }));
    }
  },
  mounted() {
    this.$apiDispatch(`${this.api}/find`);
  }
};
</script>
