import { createStore } from 'vuex'

export default createStore({
    state: {
        contactInfo: { //TODO connect this to the things written in the contact form, the values have to persist
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