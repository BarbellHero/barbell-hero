<template lang="pug">
  navigation(title="Admin" :items="navItems")
</template>

<script>
import Navigation from "~/components/navigation";
export default {
  components: {
    Navigation
  },
  data() {
    return {
      navItems: [
        {
          title: "Movement Types",
          icon: "tune",
          routeToPush: "/admin/movement-types"
        },
        {
          title: "Movements",
          icon: "accessibility",
          routeToPush: "/admin/movements"
        },
        {
          title: "Workouts",
          icon: "fitness_center",
          routeToPush: "/admin/workouts"
        }
      ]
    };
  }
};
</script>
