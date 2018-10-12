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
  async fetch({ store, params }) {
    await store.dispatch("movement-types/editWithId", params.id);
  },
  components: {
    MovementTypeForm,
    PageContent,
    PageHeader
  },
  computed: {
    movementType() {
      return this.$store.getters["movement-types/editing"];
    }
  },
  methods: {
    async save() {
      this.$store.dispatch("movement-types/save");
      await this.$router.go(-1);
    },
    async remove() {
      await this.$store.dispatch("movement-types/remove");
      this.$router.go(-1);
    }
  }
};
</script>
