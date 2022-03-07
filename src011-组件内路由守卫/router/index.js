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
            meta:{
                title:'关于'
            }
        },
        {
            path: '/home',
            component: Home,
            meta:{
                title:'主页'
            },
            children:[
                {
                    name:'news',
                    path:'news',
                    component:HomeNews,
                    meta:{
                        title:'新闻'
                    },
                    beforeEnter: (to, from, next) => {
                        if(localStorage.getItem('school')==='atguigu') next();
                        else alert('权限不足，无法访问');
                    }
                },
                {
                    name:'msg',
                    path:'message',
                    component:HomeMsg,
                    meta:{
                        title:'信息'
                    },
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

// 设置路由守卫
// router.beforeEach((to, from, next) => {
//     console.log(to.path);
//     // console.log(to.fullPath);
//     if(to.path.startsWith('/home/')){
//         if(localStorage.getItem('school')=='atguigu'){
//             next();
//         }else{
//             alert('权限不足，无法访问');
//         }
//     }else{
//         next();
//     }
// })

router.afterEach((to) => {
    document.title= to.meta.title||'vue_test';
})

export default router;