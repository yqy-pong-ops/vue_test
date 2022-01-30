<template>
  <div>
    <li>
      <!-- 可完成任务但不推荐，违反不操作props数据的原则 -->
      <!-- <input type="checkbox" name="" id="" v-model="todo.done"/> -->
      <input type="checkbox" name="" id="" v-on:change="toggle(todo.id)" />
      {{ todo.content }}
      <button>删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "toggleDone"],
  methods: {
    toggle(id) {
      // 通知App更改数据
      console.log(id);
      this.toggleDone(id);
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