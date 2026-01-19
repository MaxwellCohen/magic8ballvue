<template>
  <div class="circle outside" @click="askQuestion()" :class="{'shake':shake}" >
    <div class="circle inside">
      <div id="text" class="text">{{answer}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import { Action } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class magic8Ball extends Vue {
  private answer: string = "ask a question";
  private shake: boolean = false;
  @Action("getAnwser", { namespace: "magic8ball" }) private getAnwser: any;
  private askQuestion() {
    this.shakeElement();
    this.getAnwser().then((answer: string) => (this.answer = answer));
  }

  private shakeElement () {
    this.shake = true;
    try {
      navigator.vibrate(200)
    }
    catch (e) {
      console.log(e)
    }

    setTimeout(() => {
      this.shake = false;
    }, 200)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
