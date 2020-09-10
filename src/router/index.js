/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Plans from "../views/Plans.vue";
import Signup from "../views/Signup.vue";
import Account from "../views/Account.vue";
import Login from "../views/Login.vue";
import Students from "../views/Students.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/plans",
        name: "Plans",
        component: Plans
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/students",
        name: "Students",
        component: Students
    },
    {
        path: "/account/:userId",
        name: "Account",
        component: Account,
        props: true
    }
    
];

const router = new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
      },
    routes: routes,
});

export default router;