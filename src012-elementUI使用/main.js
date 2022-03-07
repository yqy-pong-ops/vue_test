import Vue from 'vue';

import App from './App.vue';

// element-ui完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// element-ui按需引入
import { Button, DatePicker } from 'element-ui';

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.component(Button.name,Button)
Vue.component(DatePicker.name,DatePicker)

new Vue({
    render: h => h(App),
}).$mount('#app');