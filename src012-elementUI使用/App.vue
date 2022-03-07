<template>
  <div>
    <el-button type="primary" size="default" @click="showInfo">完成</el-button>
    <el-date-picker type="date" v-model="date" size="normal" placeholder="选择日期时间">
    </el-date-picker>
  </div>
</template>

<script>
// import About from "./components/About.vue";
// import Home from "./components/Home.vue";

export default {
  name: "App",
  data() {
    return {
      date:'',
    }
  },
  methods: {
    showInfo() {
      alert("完成");
    },
  },
};
</script>

<style>
</style>