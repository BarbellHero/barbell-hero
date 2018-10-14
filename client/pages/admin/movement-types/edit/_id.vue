<template lang="pug">
  div
    page-header(v-once :title="movementType.name")
    page-content
      movement-type-form
    bottom-navigation
      bottom-action(icon="delete" @click="remove()") Delete
      bottom-action(icon="check" @click="save()") Save
</template>

<script>
import BottomAction from "~/components/BottomAction";
import BottomNavigation from "~/components/BottomNavigation";
import MovementTypeForm from "~/components/forms/MovementType";
import PageContent from "~/components/PageContent";
import PageHeader from "~/components/PageHeader";

export default {
  fetch({ app, params }) {
    app.$apiDispatch("movement-type/editWithId", params.id);
  },
  components: {
    BottomAction,
    BottomNavigation,
    MovementTypeForm,
    PageContent,
    PageHeader
  },
  computed: {
    movementType() {
      return this.$apiState("movement-type").editing;
    }
  },
  methods: {
    async save() {
      if (!this.$apiGet("movement-type/editingIsValid")) {
        return;
      }
      this.$apiDispatch("movement-type/update", [
        this.movementType.id,
        this.movementType
      ]);
      await this.$router.go(-1);
    },
    async remove() {
      await this.$apiDispatch("movement-type/remove", this.movementType.id);
      this.$router.go(-1);
    }
  }
};
</script>
