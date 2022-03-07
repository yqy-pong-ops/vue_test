<template>
  <div>
      <h1>n的值为:{{count}} </h1>
      <h1>放大10倍之后{{bigSum}} </h1>
      <h2 class="outer">下方总人数为：{{personList.length}} </h2>
      <!-- 选择框 -->
      <select name="" id="" v-model.number="n">
          <option value="">请选择</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
      </select>

      <button v-on:click="add">加</button>
      <button v-on:click="sub">减</button>
      <button v-on:click="addOdd">奇数时加</button>
      <button v-on:click="addWait">延时加</button>

      <h2>学校：{{school}} </h2>
      <h2>学科：{{subject}} </h2>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name:'App',
    data() {
        return {
            n:1,
        }
    },
    computed: {
        ...mapState(['count','school','subject','personList']),
        ...mapGetters(['bigSum'])
    },
    methods: {
        add(){
            this.$store.commit('increment',this.n);
        },
        sub(){
            this.$store.commit('decrement', this.n);
        },
        addOdd(){
            this.$store.dispatch('addOdd',this.n);
        },
        addWait(){
            this.$store.dispatch('addWait', this.n);
        }
    },
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>