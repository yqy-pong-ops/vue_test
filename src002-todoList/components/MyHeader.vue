<template>
  <div>
      <input type="text" v-model="input" v-on:keyup.enter="add">
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    name:'MyHeader',
    data() {
        return {
            input:'',
        }
    },
    methods: {
        add(){
            // 判断input是否为空
            if(this.input.trim()=='') return ;
            // 将input包装成todoObj
            const todoObj={
                id: nanoid(),
                content: this.input,
                done: false,
            };
            // 将todoObj添加到todos中
            this.addTodo(todoObj);
            this.input='';
        }
    },
    props:['addTodo'],
}
</script>

<style>

</style>