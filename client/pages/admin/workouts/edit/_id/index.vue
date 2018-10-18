<template lang="pug">
  crud-edit(api="workout" :bottomActions="bottomActions" @addSet="addSet()")
    div(slot="navigation")
      navigation(:items="sets" loopKey="id")
        div(slot="nav-item" slot-scope="{ item }")
          v-list-tile-content
            v-list-tile-title {{item["movement.name"]}}, {{item.weight}} lbs for {{item.repetitions}} reps (AMRAP: {{item.amrap}})
</template>

<script>
import CrudEdit from "~/components/crud/edit";
import Navigation from "~/components/navigation";

const query = params => ({
  query: {
    workoutId: +params.id
  }
});

export default {
  components: {
    CrudEdit,
    Navigation
  },
  async fetch({ app, params }) {
    await app.$crudBeginEdit("workout", params.id);
    await app.$apiDispatch("movement-set/find", query(params));
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
  computed: {
    sets() {
      return this.$apiGet("movement-set/find")(
        query(this.$route.params)
      ).data.map(movementSet => ({
        routeToPush: `/admin/workouts/edit/${
          this.$route.params.id
        }/movement-set/edit/${movementSet.id}`,
        ...movementSet
      }));
    }
  },
  methods: {
    addSet() {
      this.$router.push(
        `/admin/workouts/edit/${this.$route.params.id}/movement-set/create`
      );
    }
  }
};
</script>
