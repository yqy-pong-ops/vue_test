<template>
  <div>
      <input type="text" v-model="input" v-on:keyup.enter="handleEnter">
      <!-- <button v-on:click="unbind">解绑事件</button> -->
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
import {listenerOff} from '../mixins';

export default {
    data() {
        return {
            input:'',
        }
    },
    methods: {
        handleEnter(){
            // 判断输入是否为空
            if(this.input==''){
                alert('输入不能为空');
                return;
            }

            // 包装成对象
            const todoObj={
                id: nanoid(),
                content: this.input,
                done: false,
            };
            // 通知app
            this.$emit('addTodo',todoObj);
            // 清空输入
            this.input='';
        },
        // unbind(){
        //     this.$off();
        // }
    },
    // beforeDestroy() {
    //     this.$off();
    // },
    mixins:[listenerOff],
}
</script>

<style>

</style>