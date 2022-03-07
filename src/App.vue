<!--
 * @Author: Axiuxiu
 * @Date: 2022-03-01 10:15:45
 * @LastEditTime: 2022-03-07 10:00:13
 * @Description: 主组件
-->

<template>
    <!-- <router-view></router-view> -->
    <div class="app">
        <Hello v-bind:name="'user'"></Hello>
    </div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
    name:'App',
    components:{Hello,},
}
</script>

<style>

</style>