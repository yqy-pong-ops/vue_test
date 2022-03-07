<template>
  <div>
      <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
    name:'About',
    mounted() {
      console.log('About组件被挂载了');
    },
    beforeDestroy() {
      console.log('About组件被销毁了');
    },
}
</script>

<style>

</style>