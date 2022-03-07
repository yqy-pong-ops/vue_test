<template>
  <div>
    <ul>
        <li v-for="(msg) in msgList" :key="msg.id" class="x">
            <!-- 跳转链接 -->
           <router-link :to="{
               path:'/home/message/detail',
               query:{
                   id:msg.id,
                   title:msg.title
               },
           }">
                {{msg.title}}
           </router-link>
        </li>
    </ul>

    <hr>
    <!-- 指定子组件显示位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'HomeMsg',
    data() {
        return {
            msgList:[
                {id:'001',title:'消息1'},
                {id:'002',title:'消息2'},
                {id:'003',title:'消息3'},
            ]
        }
    },
};
</script>

<style>
</style>