<template>
  <div>
      <input type="text" v-model="input" v-on:keyup.enter="add">
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    data() {
        return {
            input:'',
        }
    },
    methods: {
        add(){
            // 判断input是否为空
            if(this.input.trim()=='') {
                alert('输入不能为空');
                this.input='';
                return; 
            }
            // input包装成对象
            const todoObj={
                id: nanoid(),
                content: this.input,
                done:false,
            };

            // 触发事件
            this.$emit('addTodo',todoObj);
            this.input='';
        }
    },
}
</script>

<style>

</style>