<template lang="pug">
  .signup
    v-toolbar(dark color="primary")
      v-btn(icon @click.stop="back()")
        v-icon arrow_back_ios
      v-toolbar-title Signup
      v-spacer
    v-container
      v-form(v-model="valid")
        v-text-field(prepend-icon="person" name="login" label="Email" type="email" v-model="email" required)
        v-text-field(id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password" required)
        v-text-field(id="confirm-password" prepend-icon="lock" name="confirm-password" label="Confirm Password" type="password" v-model="confirmPassword" required)
      bottom-navigation
        bottom-action(icon="person_add" @click="signup()") Signup
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
      valid: false,
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    async signup() {
      const { User } = this.$FeathersVuex;
      const user = new User({
        email: this.email,
        password: this.password
      });
      await this.$store.dispatch("users/create", user);
      this.$router.push("/login");
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
