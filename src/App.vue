<template>
  <div id="app">

    <v-search></v-search>
    <v-list></v-list>
  </div>
</template>

<script>
import list from "./components/list";
import search from "./components/search";

export default {
  name: 'App',
  components: {
    "v-list": list,
    "v-search": search
  }

}
</script>

<style>

</style>
