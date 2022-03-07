<template>
  <div>
      <li>
        <input type="checkbox" name="" id="" v-on:change="handleChange(todo.id)" v-bind:checked="todo.done">
        <span v-show="!todo.isEdit">{{todo.content}}</span>
        <input ref="contentInput" type="text" v-show="todo.isEdit" v-bind:value="todo.content" v-on:blur="handleBlur(todo.id, $event)">
        
        <button v-on:click="handleEdit" v-show="!todo.isEdit">编辑</button>
        <button v-on:click="handleClick(todo.id)" v-show="!todo.isEdit">删除</button>
      </li>
  </div>
</template>

<script>

export default {
  props:[
    'todo',
  ],
  methods: {
    handleClick(id){
      // 通知APP
      this.$bus.$emit('removeTodo',id);
    },
    handleChange(id){
      // 通知app
      this.$bus.$emit('changeDone',id);
    },
    handleEdit(){
      if('isEdit' in this.todo){
        this.todo.isEdit=true;
      }else
        this.$set(this.todo, 'isEdit', true);

      // 给输入框设置焦点
      this.$nextTick(()=>{
        this.$refs.contentInput.focus();
      })
    },
    handleBlur(id,e){
      // 检查是否为空
      const input=e.target.value;
      if(input.trim()==''){
        alert('输入不能为空');
        return;
      }
      // 通知app更改数据
      this.$bus.$emit('updateTodo',id,input);

      this.todo.isEdit=false;
    }
  },
}
</script>

<style scoped>
  li:hover{
    background-color: #ddd;
  }

  li button{
    display: none;
  }

  li:hover button{
    display: inline;
  }
</style>