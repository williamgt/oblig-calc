<template>
  <div>
    <h1 data-testid="register-title">Register yourself</h1>
    <form @submit.prevent="sendForm">
      <InputReusable
          label-name="Full name"
          v-model="user.fullName"
      ></InputReusable>

      <InputReusable
          label-name="Address"
          v-model="user.address"
      ></InputReusable>

      <InputReusable
          label-name="Username"
          v-model="user.username"
      ></InputReusable>

      <InputReusable
          label-name="Password"
          v-model="user.password"
      ></InputReusable>

      <InputReusable
          label-name="Email"
          v-model="user.email"
      ></InputReusable>

      <InputReusable
          label-name="Phone"
          v-model="user.phone"
      ></InputReusable>

      <button data-testid="submit-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import InputReusable from "../reusables/InputReusable";
//import { sendForm2 } from "../utils/api";
import {register} from "../api/login-api";

export default {
  name: "Register",
  components: { InputReusable },
  data() {
    return {
      user: {
        fullName: "",
        email: "",
        address: "",
        username: "",
        password: "",
        phone: "",
      },
    };
  },
  methods: {
    sendForm() {
      console.log('Sending form....')
      register(this.user)
      this.$store.dispatch('setUser', this.user)
      this.$store.dispatch('setLoginStatus', true)
      //this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
fieldset{
  border: none;
}
</style>
