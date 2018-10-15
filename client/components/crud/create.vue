<template lang="pug">
  div
    page-header(:title="title")
    page-content
      slot
    bottom-navigation
      bottom-action(icon="check" @click="save()") Save
</template>

<script>
import BottomAction from "~/components/bottom-action";
import BottomNavigation from "~/components/bottom-navigation";
import PageContent from "~/components/page-content";
import PageHeader from "~/components/page-header";

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
    },
    title: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    }
  },
  created() {
    const Model = this.$FeathersVuex[this.model];
    this.$apiCommit(`${this.api}/setEditing`, new Model());
  },
  methods: {
    async save() {
      if (!this.$apiGet(`${this.api}/editingIsValid`)) {
        return;
      }
      const editing = this.$apiState(this.api).editing;
      await this.$apiDispatch(`${this.api}/create`, editing);
      this.$router.go(-1);
    }
  }
};
</script>
