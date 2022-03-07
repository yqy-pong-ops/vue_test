<template>
  <div>
      <hr>
      <Person></Person>
  </div>
</template>

<script>
import Person from './components/Person.vue';

export default {
    components:{Person}
}
</script>

<style>
  .outer{
    color: red;
  }
</style>