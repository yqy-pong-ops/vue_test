<template>
  <div>
    <li>
      <input type="checkbox" name="" id="" v-model="todo.done">
      <!-- <input type="checkbox" name="" id="" v-on:change="handleChange(todo.id)"> -->
      {{todo.content}}
      <button v-on:click="handleDelete(todo.id)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  props:['todo','deleteTodo'],
  methods: {
    handleDelete(id){
      // 通知app
      this.deleteTodo(id);
    }
  },
}
</script>

<style scoped>
  li button{
    display: none;
  }

  li:hover{
    background-color: #ddd;
  }

  li:hover button{
    display: inline;
  }
</style>