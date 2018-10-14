<template lang="pug">
  .login
    v-toolbar(dark color="primary")
      v-toolbar-title Login
      v-spacer
    v-container
      v-form
        v-text-field(prepend-icon="person" name="login" label="Email" type="email" v-model="email")
        v-text-field(id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password")
      bottom-navigation
        bottom-action(icon="person_add" @click="signup()") Signup
        bottom-action(icon="lock_open" @click="login()") Login
</template>

<script>
import BottomAction from "~/components/BottomAction";
import BottomNavigation from "~/components/BottomNavigation";

export default {
  layout: "minimal",
  components: {
    BottomAction,
    BottomNavigation
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      this.$router.push("/signup");
    },
    async login() {
      await this.$store.dispatch("auth/authenticate", {
        strategy: "local",
        email: this.email,
        password: this.password
      });
      this.$router.push("/");
    }
  }
};
</script>
