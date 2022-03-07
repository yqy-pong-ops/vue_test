<template>
  <div>
      <input type="checkbox" name="" id="" v-model="isAll">
      已完成{{doneTotal}}/全部{{total}}
      <button v-on:click="clearAllDone">清除已完成</button>
  </div>
</template>

<script>
export default {
  props:['todoList'],
  computed: {
    doneTotal(){
      let cnt=0;
      this.todoList.forEach(element => {
        if(element.done) cnt++;
      });

      return cnt;
    },
    total(){
      return this.todoList.length;
    },
    
    isAll:{
      get(){
        return this.total==this.doneTotal&&this.todoList.length>0;
      },

      set(val){
        // 通知app
        this.$emit('changeAllDone',val);
      }
    }
  },
  methods: {
    clearAllDone(){
      // 通知app
      // this.$bus.$emit('clearAllDone');
      this.$emit('clearAllDone');
    }
  },
  beforeDestroy() {
    this.$off();
  },
}
</script>

<style>

</style>