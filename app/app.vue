<template>
  <div class="magic-8-ball-body">
    <h1>Magic 8 ball</h1>
    <Magic8Ball class="center" />
  </div>
</template>

<script setup lang="ts">
// Magic8Ball is auto-imported by Nuxt from components/
</script>

<style lang="scss">
// Moving scoped styles from original page to here. 
// Note: removing 'scoped' for body styles to ensure they apply to the root div effectively, 
// but scoping is generally better. The original had scoped on the page component.

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
  height: 98vh; // Original was 98vh
  margin: 0;
  overflow: hidden;
}
</style>
