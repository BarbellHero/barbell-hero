<template lang="pug">
  div
    page-header(v-once :title="item.name")
    page-content
      slot
    bottom-navigation
      bottom-action(icon="delete" @click="remove()") Delete
      bottom-action(icon="check" @click="save()") Save
</template>

<script>
import BottomAction from "~/components/BottomAction";
import BottomNavigation from "~/components/BottomNavigation";
import PageContent from "~/components/PageContent";
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    BottomAction,
    BottomNavigation,
    PageContent,
    PageHeader
  },
  props: {
    api: {
      type: String,
      required: true
    }
  },
  computed: {
    item() {
      return this.$apiState(this.api).editing;
    }
  },
  methods: {
    async save() {
      if (!this.$apiGet(`${this.api}/editingIsValid`)) {
        return;
      }
      await this.$apiDispatch(`${this.api}/update`, [this.item.id, this.item]);
      this.$router.go(-1);
    },
    async remove() {
      await this.$apiDispatch(`${this.api}/remove`, this.item.id);
      this.$router.go(-1);
    }
  }
};
</script>
