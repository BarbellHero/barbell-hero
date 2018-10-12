<template lang="pug">
  div
    page-header(v-once :title="movementType.name")
    page-content
      movement-type-form
    v-bottom-nav(app fixed :value="true")
      v-btn(flat value="delete" @click="remove()")
        span Delete
        v-icon delete
      v-btn(flat value="save" @click="save()")
        span Save
        v-icon check
</template>

<script>
import MovementTypeForm from "~/components/forms/MovementType";
import PageContent from "~/components/PageContent";
import PageHeader from "~/components/PageHeader";

export default {
  fetch({ store, params }) {
    store.dispatch("movement-type/editWithId", params.id);
  },
  components: {
    MovementTypeForm,
    PageContent,
    PageHeader
  },
  computed: {
    movementType() {
      return this.$store.state["movement-type"].editing;
    }
  },
  methods: {
    async save() {
      this.$store.dispatch("movement-type/update", [
        this.movementType.id,
        this.movementType
      ]);
      await this.$router.go(-1);
    },
    async remove() {
      await this.$store.dispatch("movement-type/remove", this.movementType.id);
      this.$router.go(-1);
    }
  }
};
</script>
