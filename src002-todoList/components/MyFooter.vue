<template>
  <div>
    <input type="checkbox" name="" id="" v-model="selectAll" v-on:change="changeAllSelected">
    已完成{{finished}}/全部{{total}}
    <button v-on:click="handleDelete">清除已完成</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos','changeAll','deleteDone'],
    data() {
      return {
        selectAll:false,
      }
    },
    computed: {
      finished(){
        let k=0;
        this.todos.forEach(element => {
          if(element.done) k++;
        });
        return k;
      },
      total(){
        return this.todos.length;
      }
    },
    methods: {
      changeAllSelected(){
        // 通知APP进行changeAll
        this.changeAll(this.selectAll);
      },
      handleDelete(){
        // 通知APP
        this.deleteDone();
      }
    },
    watch: {
      finished(val){
        if(val==this.todos.length){
          this.selectAll=true;
        }else{
          this.selectAll=false;
        }
      }
    },
}
</script>

<style scoped>

</style>