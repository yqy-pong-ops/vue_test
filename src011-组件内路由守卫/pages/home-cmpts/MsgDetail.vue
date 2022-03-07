<template>
  <div>
      <h2>消息内容</h2>
      消息id：{{id}}
      <br>
      消息标题： {{title}}
  </div>
</template>

<script>

export default {
    computed: {
        id(){
            return this.$route.query.id;
        },
        title(){
            return this.$route.query.title;
        }
    },
}
</script>

<style>

</style>