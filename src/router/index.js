import {createRouter, createWebHistory} from "vue-router";
import Calculator from "../components/Calculator";
import ContactForm from "../components/ContactForm";
import LoginScreen from "../components/LoginScreen";
import Register from "../components/Register";
import CalcHistory from "../components/CalcHistory";

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
    {
        path: "/login",
        name: 'Login',
        component: LoginScreen
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/history",
        name: "History",
        component: CalcHistory
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router //Need this such that main.js gets access to router
