<template>
  <h1>Calculations history </h1>
  <div v-if="this.$store.state.loggedIn">
    <button @click="getCalculations">Press to get latest calculations</button>
    <ul>
      <li v-for="calculation in calculations" :key="calculation"> {{calculation.expression}} = {{calculation.result}}</li>
    </ul>
  </div>

  <div v-if="!this.$store.state.loggedIn">
    <p>You are not yet logged in</p>
  </div>
</template>

<script>
import {findCalculationsByEmail} from "../api/calc-api";

export default {
  name: "CalcHistory",
  data() {
    return {
      calculations: []
    }
  },
  methods: {
    getCalculations(){
      findCalculationsByEmail('Test')
          .then(response => {
            console.log(response)
            console.log(response.data)
            this.calculations = response.data
          })
    }
  }
}
</script>

<style scoped>

</style>
