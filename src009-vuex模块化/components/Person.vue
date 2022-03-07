<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" v-model="input">
    <button v-on:click="addPerson(input)">添加</button>
    <br>
    <button v-on:click="addRandom">添加随机人名</button>

    <ul>
      <li v-for="(person) in personList" :key="person.id">
        {{person.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      input:'',
    }
  },
  computed: {
    ...mapState('personAbout', ['personList'])
  },
  methods: {
    ...mapActions('personAbout', {addRandom:'addFromServer', addPerson:'addPerson'}),
  },
}
</script>

<style scoped>
  li{
    margin-top: 5px;
    background-color: antiquewhite;
  }
</style>