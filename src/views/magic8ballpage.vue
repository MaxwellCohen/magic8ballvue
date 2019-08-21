<template>
  <div class="magic-8-ball-body ">
    <h1>Magic 8 ball</h1>
    <magic8Ball class="center" />
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import magic8Ball from "./components/magic8Ball.vue"; // @ is an alias to /src

@Component({
  components: {
    magic8Ball
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
h1 {
  color: black;
}

.magic-8-ball-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: blue;
  width: 100%;
  height: 98vh;
  margin: 0;
  overflow: hidden;
}
</style>