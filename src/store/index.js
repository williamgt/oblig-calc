import { createStore } from 'vuex'

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
            name: "",
            address: "",
            username: "",
            password: "",
            email: "",
            phone: "",
            id: "",
        },
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
            state.user = user;
        },
    },
    actions: { //to use action, you dispatch
        addForm({commit}){
            commit('ADD_CONTACT_FORM', this.state.contactInfo)
        },
        clearForm({commit}){
            commit("UPDATE_NAME", '')
            commit("UPDATE_EMAIL", '')
            commit('UPDATE_MESSAGE', '')
            commit('UPDATE_ID', null)
        },
        registerUser({ commit }, user) {
            commit("SET_USER", user);
        },
    }
})
