<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a href="#" class="list-group-item active">News</a> -->
          <router-link to="/home/news" active-class="active" class="list-group-item">News</router-link>
        </li>
        <li>
          <!-- <a href="#" class="list-group-item">Message</a> -->
          <router-link to="/home/message" active-class="active" class="list-group-item">Message</router-link>
        </li>
      </ul>
    </div>

    <!-- <ul class="list-group">
      <li class="list-group-item">消息01</li>
      <li class="list-group-item">消息02</li>
      <li class="list-group-item">消息03</li>
      <li class="list-group-item">消息04</li>
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home组件被挂载了");
  },
  beforeDestroy() {
    console.log("Home组件被销毁了");
  },
};
</script>

<style>
</style>