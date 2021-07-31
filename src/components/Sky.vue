<template>
  <div class="sky" :style="skyColor">
    <Balloon />
    <Clouds />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Balloon from "./Balloon";
import Clouds from "./Clouds";

export default {
  name: "Sky",
  props: {
    msg: String,
  },
  components: {
    Balloon,
    Clouds,
  },
  computed: {
    ...mapState(["weather"]),
    skyColor() {
      let color = "";
      if (this.weather.rainProbability < 33) {
        color = "#2178d1";
      } else if (
        this.weather.rainProbability > 33 &&
        this.weather.rainProbability < 66
      ) {
        color = "#999";
      } else {
        color = "#666";
      }

      return `background: linear-gradient( ${color}, white);`;
    },
  },
};
</script>

<style scoped>
.sky {
  width: 100%;
  height: 60vh;
  /*background: linear-gradient(#2178d1, white);*/
  /*background: linear-gradient(#085cb3, #2178d1, #62a0d8, white);*/
  position: absolute;
  top: 0;
  z-index: -1;
}
</style>
