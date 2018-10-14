<template lang="pug">
  .signup
    v-toolbar(dark color="primary")
      v-btn(icon @click.stop="back()")
        v-icon arrow_back_ios
      v-toolbar-title Signup
      v-spacer
    v-container
      v-form(ref="form" v-model="valid")
        v-text-field(
          prepend-icon="person" 
          name="login"
          label="Email"
          type="email"
          v-model="email"
          :rules="emailRules")
        v-text-field(
          id="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          v-model="password"
          :rules="passwordRules")
        v-text-field(
          id="confirm-password"
          prepend-icon="lock"
          name="confirm-password"
          label="Confirm Password"
          type="password"
          v-model="confirmPassword"
          :rules="confirmPasswordRules")
      bottom-navigation
        bottom-action(icon="person_add" @click="signup()") Signup
</template>

<script>
import BottomAction from "~/components/BottomAction";
import BottomNavigation from "~/components/BottomNavigation";
import { required, sameAs, email } from "~/plugins/form-validation";

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
      emailRules: [required, email],
      password: "",
      passwordRules: [required],
      confirmPassword: "",
      confirmPasswordRules: [
        required,
        sameAs(() => this.password, "Passwords must match")
      ]
    };
  },
  methods: {
    signup() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.createUser().then(() => this.$router.push("/login"));
    },
    async createUser() {
      const { User } = this.$FeathersVuex;
      const user = new User({
        email: this.email,
        password: this.password
      });
      await this.$apiDispatch("users/create", user);
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
