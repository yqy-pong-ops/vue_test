<template>
  <div>
    <h1>人员列表</h1>
    <h2 class="outer">上方count:{{count}} </h2>
    <input type="text" v-model="name" v-on:keyup.enter="add">
    <ul>
      <li v-for="(person) in personList" :key="person.id">
        {{person.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { nanoid } from 'nanoid';

export default {
    data() {
      return {
        name:''
      }
    },
    computed: {
      ...mapState(['personList','count'])
    },
    methods: {
      add(){
        if(this.name==''){
          alert('输入不能为空');
          return;
        }
        const personObj={
          id:nanoid(),
          name:this.name,
        }
        this.$store.commit('addPerson', personObj);
        this.name='';
      }
    },
}
</script>

<style>

</style>