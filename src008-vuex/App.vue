<template>
  <div>
      <Count></Count>
      <hr>
      <Person></Person>
  </div>
</template>

<script>
import Count from './components/Count.vue';
import Person from './components/Person.vue';

export default {
    components:{Count,Person}
}
</script>

<style>
  .outer{
    color: red;
  }
</style>