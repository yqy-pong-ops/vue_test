<template>
  <div>
    <h2 v-bind:style="{ opacity: n }">透明度变化</h2>

    <ul class="list-group">
      <li class="list-group-item">新闻01 <input type="text"></li> 
      <li class="list-group-item">新闻02 <input type="text"></li> 
      <li class="list-group-item">新闻03 <input type="text"></li> 
      <li class="list-group-item">新闻04 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeNews',
  data() {
    return {
      n: 1,
    };
  },
  // 设置透明度变化
  // activated(){
  //   this.timer=setInterval(() => {
  //     console.log('透明度变化了');
  //     if(this.n>0){
  //       this.n-=0.01;
  //     }else{
  //       this.n=1;
  //     }
  //   }, 16);
  // },
  // deactivated() {
  //   clearInterval(this.timer);
  // },
  
  // mounted() {
  //   this.timer = setInterval(() => {
  //     if (this.n > 0) {
  //       this.n -= 0.01;
  //     } else {
  //       this.n = 1;
  //     }
  //   }, 16);
  // },
  // beforeDestroy() {
  //   if ("timer" in this) {
  //     clearInterval(this.timer);
  //   }
  // },
};
</script>

<style>
</style>