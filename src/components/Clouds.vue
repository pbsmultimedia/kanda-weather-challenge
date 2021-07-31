<template>
  <div class="cloud">
    <!-- https://css-tricks.com/drawing-realistic-clouds-with-svg-and-css/ -->
    <!-- shadow -->
    <div class="cloud" id="cloud-front"></div>
    <div class="cloud" id="cloud-shadow"></div>
    <svg width="0" height="0">
      <!--Top Layer-->
      <filter id="filter-base">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01"
          numOctaves="10"
          :seed="seed"
        ></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="120" />
      </filter>
      <filter id="filter-shadow">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.009"
          numOctaves="4"
          :seed="seed"
        />
        <feDisplacementMap in="SourceGraphic" scale="100" />
      </filter>
    </svg>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Clouds",
  computed: {
    ...mapState(["weather"]),
    seed() {
      return Math.floor(Math.random() * (this.weather.rainProbability * 100));
    },
  },
};
</script>

<style scoped>
#cloud-front {
  position: absolute;
  height: 5%;
  margin: 0 auto;
  top: 20vh;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  filter: url(#filter-base);
  box-shadow: 0px 0px 20px 40px rgba(255, 255, 255, 0.9);
  animation: width 5s forwards;
}

#cloud-shadow {
  position: absolute;
  height: 2px;
  margin: 0 auto;
  top: 20vh;
  right: 0;
  left: 0;
  filter: url(#filter-shadow);
  box-shadow: 10px 30px 30px 0px rgba(0, 0, 0, 1);
  animation: width 5s forwards;
}

@keyframes width {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}
</style>