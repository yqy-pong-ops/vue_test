<template>
  <div class="demo" v-on:click="handleClick">
      <h2>学校名称：{{name}} </h2>
      <h2>学校地址：{{address}} </h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '尚硅谷',
            address:'北京',
        }
    },
    props:['showSchoolName'],
    methods: {
        handleClick(){
            this.showSchoolName(this.name);
        }
    },
}
</script>

<style scoped>
    .demo{
        position: relative;
        background-color: pink;
        border: 1px solid;
        margin: 10px;
    }
</style>