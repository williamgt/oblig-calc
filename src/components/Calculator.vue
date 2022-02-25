<template>
  <div class="calculator-container">
    <div class="errorMessage">
      <div>{{errorMessage}}</div>
    </div>

    <div class="display">
      <div>{{display}}</div>
    </div>

    <div class="numpad-container">
      <div
          class="numpad-element"
          v-for="e in elements" :key="e.element"
          @click="e.special ? special(e.element) : addToDisplay(e.element)"
      >{{e.element}}
      </div>
    </div>

    <div class="log">
      <ul v-if="log.length > 0">
        <li
            class="log-element"
            v-for="l in log.slice().reverse()" :key="l.id"
        >
          {{ l.exp }} = {{ l.ans }}
        </li>
      </ul>
    </div>



  </div>
</template>

<script>
//import calculate /*{ calculate2, calculate3*/} from "../api/calc-api";
//import axios from "axios";
import calculate from "../api/calc-api";

export default {
  name: 'Calculator',
  data(){
    return{
      display: '',
      elements: [
        {element: 'C', special: true}, {element: 'DEL', special: true}, {element: 'ANS', special: true}, {element: '=', special: true},
        {element: 7, special: false}, {element: 8, special: false}, {element: 9, special: false}, {element: '+', special: true},
        {element: 4, special: false}, {element: 5, special: false}, {element: 6, special: false}, {element: '-', special: true},
        {element: 1, special: false}, {element: 2, special: false}, {element: 3, special: false}, {element: '*', special: true},
        {element: '.', special: true}, {element: 0, special: false}, {element: '', special: true}, {element: '/', special: true},
      ],
      log: [],
      ansBuffer: '',
      errorMessage: '',
    }
  },
  methods: {
    addToDisplay(element){
      if(typeof element === 'number'){
        this.display = this.display.concat(element)
        this.errorMessage = ''
      }
    },

    async special(element) {
      if (element === '+' || element === '-' || element === '*' || element === '/' || element === '.') {
        let lastChar = this.display.slice(-1);
        if (lastChar === '.') {
          alert('Formatting error: two commas in a row are not allowed')
          //this.errorMessage = 'Formatting error: two commas in a row are not allowed'
          return
        }
        if ((element === '/' || element === '*') && (lastChar === '/' || lastChar === '*')) {
          alert('Formatting error: cannot have * or / come after each other')
          //this.errorMessage = 'Formatting error: cannot have * or / come after each other'
          return
        }
        this.display = this.display.concat(element)
      }
      if (element === 'C') {
        this.display = ''
      } else if (element === 'DEL') {
        this.display = this.display.slice(0, -1)
      } else if (element === 'ANS') {
        this.display = this.display.concat(this.ansBuffer)
      } else if (element === '=') {
        let ans
        await calculate(this.display).then(response => {ans = response.data.result})
        let reg = /^-?\d+\.?\d*$/
        if(!reg.test(ans)){
          alert(ans)
          return
        }
        try {
          let logEntry = {exp: this.display, ans: ans}
          this.ansBuffer = String(ans)
          this.display = String(ans)
          this.log.push(logEntry)
        } catch (error) {
          this.display = 'ERROR'
        }
      }
      this.errorMessage = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
  border: 0;
}
@keyframes errorAnimation {
  from{ background-color: #2c3e50}
  to{ background-color: red}
}
.errorMessage{
  animation-name: errorAnimation;
  animation-duration: 5s;
  background-color: red;
  color: white;
}

.display {
  background-color: #2c3e50;
  color: #effcff;
  width: 330px;
  height: 50px;
  font-size: larger;
}

.calculator-container {
  display: flex;
  flex-direction: column;
  background-color: #d4dbe3;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
}

.numpad-container {
  display: grid;
  border: solid black 1px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(5, 80px);
  background-color: #2c3e50;
}

.numpad-element {
  color: #effcff;
  border: solid #d4dbe3 1px;

}

.log {
  text-align: left;
}

</style>
