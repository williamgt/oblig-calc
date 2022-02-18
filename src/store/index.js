import { createStore } from 'vuex'

export default createStore({
    state: {
        contactInfo: {
            name: '',
            email: '',
            message: '',
            id: null
        },
        contactForms: []
    },
    mutations: { //to use mutations, you commit
        ADD_CONTACT_FORM(state, form){
            state.contactForms.push(form)
        }
    },
    actions: { //to use action, you dispatch
        addForm({commit}, contactInfo){
            commit('ADD_CONTACT_FORM', contactInfo)
        }
    }
})