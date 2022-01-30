<template>
  <div>
    <li>
      <!-- 可完成任务但不推荐，违反不操作props数据的原则 -->
      <input type="checkbox" name="" id="" v-model="todo.done" />
      {{ todo.content }}
      <button v-on:click="handleDelete(todo.id)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "deleteItem"],
  methods: {
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        this.deleteItem(id);
      }
    },
  },
};
</script>

<style scoped>
li button {
  display: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: inline;
}
</style>