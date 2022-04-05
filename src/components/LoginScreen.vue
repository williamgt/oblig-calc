<template>
    <div id="loginContainer" v-if="!this.$store.state.loggedIn">
      <div id="loginTitle">
        <label>Please login!</label>
      </div>

      <div id="username">
        <label id="usernameLabel">Username:</label>
        <textarea
            data-testid="username-input"
            v-model="loginRequest.username"
        ></textarea>
      </div>

      <div id="password">
        <label id="passwordLabel">Password: </label>
        <textarea
            data-testid="password-input"
            v-model="loginRequest.password"
        ></textarea>
      </div>

      <div id="sign-in-button">
        <button
            v-on:click="handleClickSignin_2"
            data-testid="submit-button"
        >Log in</button>
        <label
            id="loginstatusLabel"
            data-testid="login-status-label"
        >{{ loginStatus }}</label>
      </div>
      <p v-if="notYetRegistered">You are not yet registered. Click button under to register</p>
      <button v-if="notYetRegistered" data-testid="register-route" @click="navigate">Register</button>
      <p>{{ $store.state.user }} REMOVE AFTER FINISHED</p>
    </div>

    <div v-if="this.$store.state.loggedIn">
      <h1>You are logged in! Welcome {{this.$store.state.user.username}}</h1>
      <p>Press button to log out</p>
      <button v-on:click="logOut">Log out</button>
    </div>

  <button @click="gettoken">token</button>
</template>

<script>
import {login, getToken} from "../api/login-api";

export default {
  name: "LoginComponent",
  data() {
    return {
      loginRequest: {
        username: "",
        password: "",
      },
      loginStatus: "",
      notYetRegistered: false,
    };
  },
  methods: {
    gettoken() {
      getToken()
      .then(response => {
        console.log(response)
        console.log('THIS IS YOUR FUCKING TOKEN: ', response.data);
        this.$store.state.auth.token = response.data;
        localStorage.setItem('token', response.data);
        console.log('SAVED AUTH TOKEN: ', this.$store.state.auth.token)
      })
      .catch(e => {
        console.log(e)
      })
    },
    async handleClickSignin_2() {
      console.log('Signing in...')
      let user;
      await login(this.loginRequest.username, this.loginRequest.password).then(response => user = response.data) //TODO Throws error if fields are empty, fix
      if(user){
        console.log('Found user')
        this.$store.dispatch('setUser', user)
        this.$store.dispatch('setLoginStatus', true)
        this.notYetRegistered = false
        //TODO router push to claculator view and have personalized msg at top of website
      }else{
        console.log('No user found')
        this.$store.dispatch('clearUser')
        this.$store.dispatch('setLoginStatus', false)
        this.notYetRegistered = true
      }
    },
    navigate() {
      console.log('Navigating...')
      this.$router.push("/register");
    },
    logOut() {
      this.$store.dispatch('clearUser')
      this.$store.dispatch('setLoginStatus', false)
    }
  },
};
</script>

<style scoped>
#loginContainer {
  display: grid;
  justify-content: center;
  margin: 40px;
}

#loginTitle {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

#username,
#password {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
}

#sign-in-button {
  align-self: start;
}

#usernameLabel,
#passwordLabel {
  width: 100px;
}
</style>
