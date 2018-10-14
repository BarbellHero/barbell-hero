<template lang="pug">
  navigation(title="Admin" :items="navItems")
</template>

<script>
import Navigation from "~/components/Navigation";
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
        }
      ]
    };
  }
};
</script>
