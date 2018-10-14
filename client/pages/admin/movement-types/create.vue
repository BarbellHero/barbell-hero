<template lang="pug">
  div
    page-header(title="New Movement Type")
    page-content
      movement-type-form
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
  created() {
    const { MovementType } = this.$FeathersVuex;
    this.$apiCommit("movement-type/setEditing", new MovementType({ name: "" }));
  },
  methods: {
    async save() {
      const editing = this.$apiState("movement-type").editing;
      await this.$apiDispatch("movement-type/create", editing);
      this.$router.go(-1);
    }
  }
};
</script>
