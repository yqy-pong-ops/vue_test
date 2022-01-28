/**
 * 改文件是整个项目的入口文件
 */
// 引入vue
import Vue from 'vue'
// App组件时所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
