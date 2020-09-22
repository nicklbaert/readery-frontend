import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAnalytics from 'vue-analytics';
import AxiosPlugin from 'vue-axios-cors';
 
Vue.use(AxiosPlugin);
Vue.use(VueAnalytics, {
    id: 'UA-117438770-2',
    router
});





Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");