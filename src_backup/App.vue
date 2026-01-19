<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <magic8ball></magic8ball>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import magic8Ball from "./views/magic8ballpage.vue"; // @ is an alias to /src


@Component({
  components: {
    magic8Ball
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped >

</style>
