<template lang="pug">
  div
    page-header(title="New Movement Type")
    page-content
      movement-type-form
    v-bottom-nav(app fixed :value="true")
      v-btn(flat value="save" @click="save()")
        span Save
        v-icon check
</template>

<script>
import MovementTypeForm from "~/components/forms/MovementType";
import PageContent from "~/components/PageContent";
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    MovementTypeForm,
    PageContent,
    PageHeader
  },
  created() {
    this.$store.commit("movement-types/setEditing", { name: "" });
  },
  methods: {
    async save() {
      this.$store.dispatch("movement-types/create");
      await this.$router.go(-1);
    }
  }
};
</script>
