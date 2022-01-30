<template>
  <div>
      <MyHeader :addTodo="addTodo"></MyHeader>
      <MyList :todos="todos" :toggleDone="toggleDone"></MyList>
      <MyFooter></MyFooter>
  </div>
</template>

<script>

import MyFooter from '../components/MyFooter.vue';
import MyHeader from '../components/MyHeader.vue';
import MyList from '../components/MyList.vue';

// 数据存放在App组建中更合适
export default {
    name:'App',
    components:{
        MyFooter,
        MyHeader,
        MyList,
    },
    data() {
        return {
            todos:[],
        }
    },
    methods: {
        addTodo(obj){
            this.todos.unshift(obj);
        },
        toggleDone(id){
            for(let i=0;i<this.todos.length;i++){
                if(id===this.todos[i].id){
                    console.log('todo.id: '+id);
                    this.todos[i].done=!this.todos[i].done;
                }
            }
        }
    },
}
</script>

<style>

</style>