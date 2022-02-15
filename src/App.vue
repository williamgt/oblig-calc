<template>
  <h1>Calculator</h1>
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
