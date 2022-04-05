import { createStore } from 'vuex'
import {findCalculationsByEmail} from "../api/calc-api";

export default createStore({
    state: {
        loggedIn: false,
        contactInfo: { //TODO connect this to the things written in the contact form, the values have to persist
            name: '',
            email: '',
            message: '',
            id: null
        },
        contactForms: [],
        user: {
            fullName: "",
            email: "",
            address: "",
            username: "",
            password: "",
            phone: "",
        },
        calculations: [],
        auth: {
            token: ""
        }
    },
    mutations: { //to use mutations, you commit
        ADD_CONTACT_FORM(state, form){
            state.contactForms.push(form)

        },
        UPDATE_NAME(state, name){
            state.contactInfo.name = name
        }
        ,
        UPDATE_EMAIL(state, email){
            state.contactInfo.email = email
        }
        ,
        UPDATE_MESSAGE(state, message){
            state.contactInfo.message = message
        },
        UPDATE_ID(state, id){
            state.contactInfo.id = id
        },
        SET_USER(state, user){
            state.user = user
        },
        SET_LOGIN_STATUS(state, status){
            state.loggedIn = status
        }
    },
    actions: { //to use action, you dispatch
        addForm({commit}){
            commit('ADD_CONTACT_FORM', this.state.contactInfo)
        },
        clearForm({commit}){ //todo Is this best practice...
            commit("UPDATE_NAME", '')
            commit("UPDATE_EMAIL", '')
            commit('UPDATE_MESSAGE', '')
            commit('UPDATE_ID', null)
        },
        setUser({ commit }, user) {
            commit("SET_USER", user)
        },
        clearUser(){ //todo ...or this?
            this.state.user = {
                fullName: "",
                email: "",
                address: "",
                username: "",
                password: "",
                phone: "",
            }
        },
        /*async */setLoginStatus({commit}, /*{dispatch},*/ status) {
            commit("SET_LOGIN_STATUS", status)
           /* if (status === true) { //TODO somehow, the code below breaks behavior
                await dispatch("updateCalculations")
                console.log(this.state.calculations)
            } else {
                this.state.calculations = []
            }*/
        },
        updateCalculations(){
            this.state.calculations = findCalculationsByEmail('Test')
                .then(response => {
                    console.log(response)
                    console.log(response.data)
                    this.state.calculations = response.data
                })
        }
    }
})
