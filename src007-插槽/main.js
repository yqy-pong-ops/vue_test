import Vue from 'vue';

import App from './App.vue';
// import { listenerOff } from './mixins';
Vue.config.productionTip = false

import Vuex from 'vuex';

Vue.use(Vuex);
// Vue.mixin(listenerOff);

const store = new Vuex.Store({
    // ...
    actions:{
        
    },
    mutations:{
        increment(state){
            state.count++;
        }
    },
    state:{
        count:0
    }
})

new Vue({
    render: h => h(App),
    // 安装全局时间总线
    beforeCreate() {
        Vue.prototype.$bus=this;
    },
    store,
}).$mount('#app');