<template>
  <div class="row">
    <p v-if="showText" style="text-align: center;font-size: 30px;color: green">请输入要查询的用户</p>
    <p v-else-if="showLoading" style="text-align: center;font-size: 30px;color: green">loading...</p>
    <p v-else-if="showNoBody" style="text-align: center;font-size: 30px;color: green">查无此人</p>
    <div v-else class="card" v-for="user in users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "v-list",
  computed: {
    ...mapState(["users", "showText", "showLoading", "showNoBody"])
  }
}
</script>

<style scoped>

</style>
