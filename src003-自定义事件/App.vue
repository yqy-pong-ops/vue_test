<template>
  <div class="main">
      <!-- 传递函数 -->
      <School :showSchoolName="showSchoolName"></School>
      <!-- 自定义事件 -->
      <Student v-on:showName="showStudentName"></Student>
  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';

export default {
  components:{
    School,
    Student,
  },
  methods: {
    showSchoolName(name){
      console.log('学校名称：'+name);
    },
    showStudentName(name){
      console.log('学生姓名：'+name);
    }
  },
};
</script>

<style>
  .main{
    position: relative;
    background-color: antiquewhite;
    border: 1px solid azure;
  }
</style>