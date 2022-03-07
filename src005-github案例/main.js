import Vue from 'vue';

import App from './App.vue';
// import { listenerOff } from './mixins';
Vue.config.productionTip = false

// Vue.mixin(listenerOff);

new Vue({
    render: h => h(App),
    // 安装全局时间总线
    beforeCreate() {
        Vue.prototype.$bus=this;
    },
}).$mount('#app');