/*
 * @Author: Axiuxiu
 * @Date: 2022-01-30 19:50:38
 * @LastEditTime: 2022-03-01 11:42:03
 * @Description: 
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');