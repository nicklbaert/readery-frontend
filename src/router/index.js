/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Plans from "../views/Plans.vue";
import Signup from "../views/Signup.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Signup
    },
    {
        path: "/account/:userId",
        name: "Account",
        component: Account
    }
    
];

const router = new VueRouter({
    routes
});

export default router;