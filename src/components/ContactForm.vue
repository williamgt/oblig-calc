<template>
<!--  <div class="form-container">-->
    <form
        class="form-container"
        @submit.prevent="sendForm"
    >
      <h1>Welcome to contact forms page</h1>

      <!--Name input-->
      <fieldset>
        <label for="name">Full name</label>
        <input
            v-model="contactInfo.name"
            id="name"
        />
        <p v-if="!validName">Name field cannot be empty</p>
      </fieldset>

      <!--Email input-->
      <fieldset>
        <label for="email">Email:</label>
        <input
            v-model="contactInfo.email"
            id="email"
        />
        <p v-if="!validEmail">Email is invalid</p>
      </fieldset>

      <!--Message input-->
      <fieldset>
        <label for="message">Message:</label>
        <textarea
            v-model="contactInfo.message"
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
<!--  </div>-->

</template>

<script>
export default {
  name: "ContactForms",
  data() {
    return {
      contactInfo: {
        name: '',
        email: '',
        message: ''
      },
      sending: false,
      sent: false
    }
  },
  methods: {

    sendForm() {
      this.sending = true
      setTimeout(() => {
        this.sending = false
        this.sent = true
        setTimeout(() => this.sent = false, 2000)
      }, 2000)
    }
  },
  computed: {
    validName() {
      return this.contactInfo.name !== ''
    },
    validEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.contactInfo.email);
    },
    validMessage()  {
      return this.contactInfo.message !== ''
    },
    isValid(){
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.contactInfo.email) && this.contactInfo.message !== '' && this.contactInfo.name !== ''
    }
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