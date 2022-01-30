<template>
  <div>
    <ul>
      <MyItem v-for="(todo) in todos" :key="todo.id" :todo="todo" v-bind:deleteTodo="deleteTodo"></MyItem>
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem.vue';

export default {
  props:['todos','deleteTodo'],
  components:{
    MyItem,
  }
}
</script>

<style>

</style>