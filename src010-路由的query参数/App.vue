<template>
  <div>
    <div class="row">
      <div class="offset-md-2 col-md-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
        </div>
      </div>
    </div>

    <hr>
      
    <div class="row">
      <div class="col-md-2 offset-md-2">
        <div class="list-group">
          <!-- 原始html使用a实现跳转 -->
          <!-- <a href="#" class="list-group-item active">About</a>
          <a href="#" class="list-group-item">Home</a> -->

          <!-- VueRouter使用router-link -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
            <!-- <About></About>
            <Home></Home> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import About from "./components/About.vue";
// import Home from "./components/Home.vue";

export default {
  name:'App',
  // components: { About, Home },
};
</script>

<style>
</style>