<template lang="pug">
  div
    page-header(title="New Movement Type")
    page-content
      v-form(v-model="valid")
        v-text-field(v-model.lazy="name" label="Name" required)
    v-bottom-nav(app fixed :value="true")
      v-btn(flat value="save" @click="save()")
        span Save
        v-icon check
</template>

<script>
import PageContent from "~/components/PageContent";
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    PageContent,
    PageHeader
  },
  data() {
    return {
      valid: false
    };
  },
  computed: {
    movementType() {
      return this.$store.getters["movement-types/editing"];
    },
    name: {
      get() {
        return this.movementType.name;
      },
      set(value) {
        this.updateEditing({ name: value });
      }
    }
  },
  created() {
    this.$store.commit("movement-types/setEditing", { name: "" });
  },
  methods: {
    updateEditing(changes) {
      this.$store.commit("movement-types/updateEditing", changes);
    },
    async save() {
      this.$store.dispatch("movement-types/create");
      await this.$router.go(-1);
    }
  }
};
</script>
