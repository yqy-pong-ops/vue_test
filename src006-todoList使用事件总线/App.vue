<template>
  <div>
      <MyHeader v-on:addTodo="addTodo"></MyHeader>
      <MyList v-bind:todoList="todoList"></MyList>
      <MyFooter v-bind:todoList="todoList" v-on:clearAllDone="clearAllDone" v-on:changeAllDone="changeAllDone"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';


export default {
    name:'App',
    components:{
        MyHeader,
        MyList,
        MyFooter,
    },
    data() {
        return {
            todoList:JSON.parse(localStorage.getItem('todoList')) ||[],
        }
    },
    methods: {
        addTodo(todoObj){
            this.todoList.unshift(todoObj);
        },
        clearAllDone(){
            this.todoList=this.todoList.filter((item)=>{
                return !item.done;
            });
        },
        changeAllDone(flag){
            this.todoList.forEach(element => {
                element.done=flag;
            });
        }
    },
    mounted() {
        // 全局事件: 注意回调要使用箭头函数
        this.$bus.$on('removeTodo',(id)=>{
            this.todoList=this.todoList.filter((item)=>{
                return item.id !=id;
            });
        });

        this.$bus.$on('changeDone',(id)=>{
            this.todoList.forEach(element => {
                if(element.id==id){
                    element.done=!element.done;
                }
            });
        });

        // this.$bus.$on('clearAllDone',()=>{
        //     this.todoList=this.todoList.filter((item)=>{
        //         return !item.done;
        //     });
        // });
        
        this.$bus.$on('updateTodo',(id, val)=>{
            // console.log('update');
            this.todoList.forEach(element => {
                if(element.id==id){
                    element.content=val;
                }
            });
        });
    },
    watch: {
        todoList:{
            deep:true,

            handler(val){
                localStorage.setItem('todoList',JSON.stringify(val));
            }
        }
    },
    beforeDestroy() {
        this.$bus.$off('removeTodo');
        this.$bus.$off('changeDone');
        this.$bus.$off('updateTodo');
    },
}
</script>

<style>
    
</style>