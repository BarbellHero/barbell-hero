<template lang="pug">
  v-navigation-drawer(permanent floating width="100%")
    v-toolbar(flat v-if="title")
      v-list
        v-list-tile
          v-list-tile-title.title {{title}}
    v-divider
    v-list.pt-0(dense)
      v-list-tile(v-for="item in items" :key="item.title" @click="go(item.routeToPush)")
        v-list-tile-action
          v-icon {{ item.icon }}
        v-list-tile-content
          v-list-tile-title {{ item.title }}
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    go(route) {
      this.$router.push(route);
    }
  }
};
</script>
