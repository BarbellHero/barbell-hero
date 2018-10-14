<template lang="pug">
  div
    page-header(:title="title")
    page-content
      slot
    bottom-navigation
      bottom-action(icon="check" @click="save()") Save
</template>

<script>
import BottomAction from "~/components/BottomAction";
import BottomNavigation from "~/components/BottomNavigation";
import MovementTypeForm from "~/components/forms/MovementType";
import PageContent from "~/components/PageContent";
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    BottomAction,
    BottomNavigation,
    MovementTypeForm,
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
