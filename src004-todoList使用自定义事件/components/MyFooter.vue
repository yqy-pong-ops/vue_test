<template>
  <div>
      <input type="checkbox" name="" id="" v-model="isAll">
      已完成{{doneTotal}}/全部{{total}}
      <button v-on:click="clearDone">清空已完成</button>
  </div>
</template>

<script>
export default {
  props:['todos'],
  methods: {
    clearDone(){
      // 通知app
      this.$emit('clearDone');
    }
  },
  computed: {
    doneTotal(){
      let cnt=0;
      this.todos.forEach(element => {
        if(element.done) cnt++;
      });
      return cnt;
    },
    total(){
      return this.todos.length;
    },
    isAll:{
      get(){
        return this.doneTotal==this.todos.length&&this.todos.length>0;
      },
      set(val){
        // 通知app对todos
        this.$emit('toggleAll',val);
      }
    }
  },
}
</script>

<style>

</style>