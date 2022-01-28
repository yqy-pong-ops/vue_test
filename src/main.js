/**
 * 改文件是整个项目的入口文件
 */
// 引入vue
import Vue from 'vue'
// App组件时所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象vm
new Vue({
  // 将app组件放入容器中
  render: h => h(App),
}).$mount('#app')
