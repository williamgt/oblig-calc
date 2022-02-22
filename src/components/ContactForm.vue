<template>
<div>
    <form
        class="form-container"
        @submit.prevent="sendForm"
    >
      <h1>Welcome to contact forms page</h1>

      <!--Name input-->
      <fieldset>
        <label for="name">Full name</label>
        <input
            v-model="name"
            id="name"
        />
        <p v-if="!validName">Name field cannot be empty</p>
      </fieldset>

      <!--Email input-->
      <fieldset>
        <label for="email">Email:</label>
        <input
            v-model="email"
            id="email"
        />
        <p v-if="!validEmail">Email is invalid</p>
      </fieldset>

      <!--Message input-->
      <fieldset>
        <label for="message">Message:</label>
        <textarea
            v-model="message"
            id="message"
        ></textarea>
        <p v-if="!validMessage">You must write a message</p>
      </fieldset>

      <!--Button-->
      <button
          id="submit"
          type="submit"
          :disabled="!isValid"
      >Submit</button><!--Maybe choose another type (has to do with submitting)-->
      <!--    <label for="submit"></label> internet says '..does not need a label associated with it'-->
      <p v-if="this.sending">Sending...</p>
      <p v-if="this.sent">Sent!</p>

    </form>
  <!--<div> {{$store.state.contactForms}}</div> To see that store is actually updated -->
</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      sending: false,
      sent: false
    }
  },
  methods: {
    sendForm() {
      this.sending = true
      setTimeout(() => {
        this.$store.state.contactInfo.id = uuidv4()
        this.$store.dispatch('addForm')
        this.sending = false
        this.sent = true
        //this.$store.dispatch('clearForm')
        setTimeout(() => this.sent = false, 2000) //Nested timeouts, maybe lead to some problems
      }, 2000)
    }
  },
  computed: {
    validName() {
      return this.$store.state.contactInfo.name !== ''
    },
    validEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.$store.state.contactInfo.email);
    },
    validMessage()  {
      return this.$store.state.contactInfo.message !== ''
    },
    isValid(){
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.$store.state.contactInfo.email) && this.$store.state.contactInfo.message !== '' && this.$store.state.contactInfo.name !== ''
    },
    name: {
      get () {
        return this.$store.state.contactInfo.name
      },
      set (newName) {
        this.$store.commit('UPDATE_NAME', newName)
      }
    },
    email: {
      get () {
        return this.$store.state.contactInfo.email
      },
      set (newEmail) {
        this.$store.commit('UPDATE_EMAIL', newEmail)
      }
    },
    message: {
      get () {
        return this.$store.state.contactInfo.message
      },
      set (newMessage) {
        this.$store.commit('UPDATE_MESSAGE', newMessage)
      }
    },
  }
}
</script>

<style scoped>

.form-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}

</style>