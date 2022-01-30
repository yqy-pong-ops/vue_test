<template>
    <div>
        <h2>学校名称：{{name}} </h2>
        <h2>学校地址：{{address}} </h2>
        <button v-on:click="toggle">更改名称</button>
    </div>
</template>

<script>
export default {
    // 用于控制vue开发者工具中显示的名称
    name:'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京',
            switch: 0,
        }
    },
    methods: {
        toggle(){
            this.name=this.switch==0?'atguigu':'尚硅谷';

            this.switch=!this.switch;
        }
    },
}
</script>

<style>

</style>