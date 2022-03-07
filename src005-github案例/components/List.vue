<template>
  <div>
    <div
      v-show="info.userList.length"
      class="card"
      v-for="user in info.userList"
      :key="user.login"
    >
      <a :href="user.html_url">
        <img :src="user.avatar_url" alt="" srcset="" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>

    <h1 v-show="info.isEmpty">未查询到结果</h1>
    <h1 v-show="info.isFirst">欢迎使用</h1>
    <h1 v-show="info.isLoading">加载中……</h1>
    <div v-show="info.errMsg != ''">{{ info.errMsg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        userList: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
        isEmpty: false,
      },
    };
  },
  mounted() {
    this.$bus.$on('updateUserlist',(info)=>{
      // 部分更新，同名属性后面覆盖前面
      this.info={...this.info, ...info};
    });
  },
  beforeDestroy() {
    this.$bus.$off('updateUserlist');
  },
};
</script>

<style>
</style>