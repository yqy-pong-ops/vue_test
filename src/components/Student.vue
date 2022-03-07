<template>
  <div class="demo" >
      <h2>学生姓名：{{name}} </h2>
      <h2>学生年龄：{{age}} </h2>
      <h2>学生性别：{{sex}} </h2>

        <button v-on:click="handleClick">传递学生姓名</button>
      <button v-on:click="showX">展示x</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            age: 20,
            sex: '男'
        }
    },
    methods: {
        handleClick(){
            this.$emit('showName',this.name)
        },
        showX(){
            console.log(this.x);
        }
    },
}
</script>

<style scoped>
    .demo{
        position: relative;
        background-color: violet;
        border: 1px solid;
        margin: 10px;
    }
</style>