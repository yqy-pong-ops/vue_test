import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/Index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/index/:id',
            name:'index',
            props: true,
            component: Index,
        }
    ]
})

export default router;