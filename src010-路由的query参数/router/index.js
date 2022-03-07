import VueRouter from 'vue-router';
import About from '../pages/About.vue'
import Home from '../pages/Home.vue';
import HomeMsg from '../pages/home-cmpts/HomeMsg.vue';
import HomeNews from '../pages/home-cmpts/HomeNews.vue';
import MsgDetail from '../pages/home-cmpts/MsgDetail.vue';

const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path:'news',
                    component:HomeNews,
                },
                {
                    path:'message',
                    component:HomeMsg,
                    children:[
                        {
                            path:'detail',
                            component:MsgDetail,
                        }
                    ]
                }
            ]
        }
    ]
})

export default router;