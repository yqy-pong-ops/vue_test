<template>
  <div class="category">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>

      <slot name="persons" v-bind:persons="persons"></slot>
  </div>
</template>

<script>
export default {
    data() {
        return {
            persons:[
                {id:'001',name:'张三',age:20},
                {id:'002',name:'张三',age:20},
            ]
        }
    },
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
</style>