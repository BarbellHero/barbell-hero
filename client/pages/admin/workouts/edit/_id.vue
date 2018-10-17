<template lang="pug">
  crud-edit(api="workout" :bottomActions="bottomActions" @addSet="addSet()")
    span 
</template>

<script>
import CrudEdit from "~/components/crud/edit";

export default {
  components: {
    CrudEdit
  },
  async fetch({ app, params }) {
    await app.$crudBeginEdit("workout", params.id);
  },
  data() {
    return {
      bottomActions: [
        {
          icon: "add",
          event: "addSet",
          title: "Add Set"
        }
      ]
    };
  },
  methods: {
    addSet() {}
  }
};
</script>
