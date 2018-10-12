<template lang="pug">
  v-navigation-drawer(permanent floating width="100%")
    v-toolbar(flat v-if="title")
      v-list
        v-list-tile
          v-list-tile-title.title {{title}}
    v-divider
    v-list.pt-0(dense)
      v-list-tile(v-for="item in items" :key="item.title" nuxt :to="item.routeToPush")
        v-list-tile-action(v-if="item.icon")
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
    },
    separated: {
      type: Boolean,
      default: false
    }
  }
};
</script>
