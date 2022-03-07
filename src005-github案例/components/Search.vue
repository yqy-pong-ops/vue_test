<template>
  <div>
    <input type="text" v-model="keyword" v-on:keyup.enter="search" />
    <button v-on:click="search">搜索</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      this.$bus.$emit("updateUserlist", {
        isFirst: false,
        isLoading: true,
        isEmpty: false,
        userList:[],
      });

      axios
        .get("https://api.github.com/search/users", {
          params: {
            q: this.keyword,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.items.length) {
            this.$bus.$emit("updateUserlist", {
              userList: res.data.items,
              isLoading: false,
            });
          } else {
            this.$bus.$emit("updateUserlist", {
              isEmpty: true,
            });
          }
        })
        .catch((err) => {
          console.error(err);
          this.$bus.$emit("updateUserlist", {
            isLoading: false,
            isFirst: false,
            errMsg: err.message,
          });
        });

      this.keyword = "";
    },
  },
};
</script>

<style>
</style>