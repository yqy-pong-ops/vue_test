import Vue from 'vue';

import App from './App.vue';
// import { listenerOff } from './mixins';
import store from './store/index';
Vue.config.productionTip = false



new Vue({
    render: h => h(App),
    // 安装全局时间总线
    beforeCreate() {
        Vue.prototype.$bus=this;
    },
    store,
}).$mount('#app');