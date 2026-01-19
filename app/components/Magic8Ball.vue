<template>
  <div class="circle outside" @click="askQuestion()" :class="{'shake':shake}" >
    <div class="circle inside">
      <div id="text" class="text">{{answer}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DEFAULTANSWERS } from '../utils/answers'

const answer = ref("ask a question")
const shake = ref(false)

const askQuestion = () => {
  shakeElement()
  getAnswer().then((ans: string) => (answer.value = ans))
}

const getAnswer = async (): Promise<string> => {
  // Simulate async delay if needed, or just return instantly
  // Using the global utils auto-imported by Nuxt if in utils/ dir
  // However, explicit import is safer if auto-imports fail or for clarity
  // Nuxt auto-imports exports from 'utils' directory
  
  // We can just pick directly here.
  const ansList = DEFAULTANSWERS
  return ansList[Math.floor(Math.random() * ansList.length)] || "Ask again later"
}

const shakeElement = () => {
  shake.value = true
  try {
    if (navigator && navigator.vibrate) {
        navigator.vibrate(200)
    }
  }
  catch (e) {
    console.log(e)
  }

  setTimeout(() => {
    shake.value = false
  }, 200)
}
</script>

<style scoped >
.circle {
  border-radius: 50%;
}

.outside {
  background: #222222;
  position: relative;
  margin: auto;
  min-width: 300px;
  min-height: 300px;
  width: 60vmin;
  height: 60vmin;
}

.inside {
  background: black;
  position: absolute;
  top: 30%;
  left: 30%;
  border: 1px solid black;
  display: table;
  min-width: 100px;
  min-height: 100px;
  width: 20vmin;
  height: 20vmin;
}

.text {
  color: purple;
  font-size: 16px;
  font-weight: bold;
  vertical-align: middle;
  text-align: center;
  word-wrap: break-word;
  display: table-cell;
}
h1 {
  text-align: center;
}


.shake {
  animation: shake 0.1s;
  animation-iteration-count: 20;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
