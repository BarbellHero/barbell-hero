<template lang="pug">
  crud-create(
    api="workout"
    title="New Workout"
    model="Workout"
  )
    workout-form
</template>

<script>
import CrudCreate from "~/components/crud/create";
import WorkoutForm from "~/components/forms/workout";

export default {
  components: {
    CrudCreate,
    WorkoutForm
  }
};
</script>
