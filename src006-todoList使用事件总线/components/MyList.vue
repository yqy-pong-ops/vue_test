<template>
  <div>
    <ul>
      <MyItem v-for="(todoObj) in todoList" :key="todoObj.id" v-bind:todo="todoObj"></MyItem>
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem.vue';

export default {
  components:{
    MyItem,
  },
  props:[
    'todoList',
  ]
}
</script>

<style>

</style>