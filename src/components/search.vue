<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model.trim="username"/>
      <button @click="SearchFn">Search</button>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: "v-search",
  computed: {
    username: {
      get() {
        return this.$store.state.userName
      },
      set(val) {
        this.usernameFn(val)
      }
    }
  },
  methods: {
    ...mapActions({
      usernameFn: "userName",
      SearchFn: "Search"
    }),
    // SearchFn() {
    //   this.Search()
    // }
  }
}
</script>

<style scoped>

</style>
