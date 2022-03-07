/*
 * @Author: Axiuxiu
 * @Date: 2022-03-01 11:03:17
 * @LastEditTime: 2022-03-01 11:22:32
 * @Description: 路由
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由组件
import E1 from './views/E1.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/e1',
            name:'e1',
            component:E1,
        }
    ]
})

export default router;