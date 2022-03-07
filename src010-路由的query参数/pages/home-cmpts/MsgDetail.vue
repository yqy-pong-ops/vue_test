<!--
 * @Author: Axiuxiu
 * @Date: 2022-02-08 20:29:12
 * @LastEditTime: 2022-03-07 09:41:59
 * @Description: 消息详情
-->
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