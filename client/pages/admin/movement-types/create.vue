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
    const { MovementType } = this.$FeathersVuex;
    this.$store.commit(
      "movement-type/setEditing",
      new MovementType({ name: "" })
    );
  },
  methods: {
    async save() {
      const editing = this.$store.state["movement-type"].editing;
      await this.$store.dispatch("movement-type/create", editing);
      this.$router.go(-1);
    }
  }
};
</script>
