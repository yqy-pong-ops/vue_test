<template>
  <div v-show="total">
    <input type="checkbox" name="" id="" v-model="selectAll" />
    已完成{{ finished }}/全部{{ total }}
    <button v-on:click="handleDelete">清除已完成</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "changeAll", "deleteDone"],
  computed: {
    finished() {
      let k = 0;
      this.todos.forEach((element) => {
        if (element.done) k++;
      });
      return k;
    },
    total() {
      return this.todos.length;
    },
    selectAll: {
      get() {
        return this.finished == this.total && this.total;
      },
      set(val) {
        // 通知APP进行changeAll

        this.changeAll(val);
      },
    },
  },
  methods: {
    handleDelete() {
      // 通知APP
      this.deleteDone();
    },
  },
};
</script>

<style scoped>
</style>