<template>
  <div>
    <MyHeader :addTodo="addTodo"></MyHeader>
    <MyList :todos="todos" :deleteItem="deleteItem"></MyList>
    <MyFooter
      :todos="todos"
      v-bind:changeAll="changeAll"
      :deleteDone="deleteDone"
    ></MyFooter>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";

// 数据存放在App组建中更合适
export default {
  name: "App",
  components: {
    MyFooter,
    MyHeader,
    MyList,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    deleteItem(id) {
      // console.log(id);
      this.todos = this.todos.filter((item) => {
        return item.id != id;
      });
    },
    changeAll(flag) {
      console.log("changeAll");
      this.todos.forEach((todo) => {
        todo.done = flag;
      });
    },
    deleteDone() {
      this.todos = this.todos.filter((item) => {
        return item.done == false;
      });
    },
  },
  watch: {
    todos: {
      deep: true,

      handler(val) {
        localStorage.setItem("todos", JSON.stringify(val));
      },
    },
  },
};
</script>

<style>
</style>