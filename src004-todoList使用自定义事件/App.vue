<template>
  <div>
    <MyHeader v-on:addTodo="addTodo"></MyHeader>
    <MyList :todos="todos" v-bind:deleteTodo="deleteTodo"></MyList>
    <MyFooter v-bind:todos="todos" v-on:toggleAll="toggleAll" v-on:clearDone="clearDone"></MyFooter>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';

export default {
  name:'App',
  components:{
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      // 添加本地存储
      todos:JSON.parse(localStorage.getItem('todos'))||[],
    }
  },
  methods: {
    addTodo(obj){
      this.todos.unshift(obj);
    },
    deleteTodo(id){
      this.todos=this.todos.filter((item)=>{
        return item.id!=id;
      });
    },
    toggleAll(val){
      this.todos.forEach(element => {
        element.done=val;
      });
    },
    clearDone(){
      this.todos=this.todos.filter((item)=>{
        return !item.done
      });
    }
  },
  watch: {
    todos:{
      deep: true,

      handler(val){
        localStorage.setItem('todos',JSON.stringify(val));
      }
    }
  },
}
</script>

<style>

</style>