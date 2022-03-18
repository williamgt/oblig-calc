<template>
  <h1>Calculator</h1>
  <p v-if="this.$store.state.loggedIn">Hello {{this.$store.state.user.username}}!</p>
  <div>
    <router-view></router-view>

    <router-link
        class="router-link"
        :to="{name: 'Calculator'}"
    >calc</router-link>

    <router-link
        class="router-link"
        :to="{name: 'ContactForm'}"
    >forms</router-link>

    <router-link
      class="router-link"
      :to="{name: 'Login'}"
    >login</router-link>

    <router-link
        class="router-link"
        :to="{name: 'History'}"
    >history</router-link>
  </div>

</template>

<script>
//import Calculator from "./components/Calculator";

export default {
  name: 'App',
  components: {
    //Calculator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link{
  text-decoration: none;
  padding: 10px;
}
.router-link:hover {
  font-size: 18px;
}
</style>
