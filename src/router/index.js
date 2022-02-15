import Calculator from "../components/Calculator";
import ContactForm from "../components/ContactForm";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Calculator',
        component: Calculator
    },
    {
        path: '/contact-form',
        name: 'ContactForm',
        component: ContactForm
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router //Need this such that main.js gets access to router