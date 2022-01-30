<template>
  <div class="demo" v-on:click="handleClick">
      <h2>学生姓名：{{name}} </h2>
      <h2>学生年龄：{{age}} </h2>
      <h2>学生性别：{{sex}} </h2>
  </div>
</template>

<script>
export default {
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