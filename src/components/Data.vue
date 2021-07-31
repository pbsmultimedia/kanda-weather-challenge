<template>
  <div class="info">
    <article class="info-card rain">
      <h1>
        <AnimatedNumbers :number="weather.rainProbability" />
        <sup>%</sup>
      </h1>
      <span>rain probability </span>
    </article>
    <article class="info-card temperature">
      <h1>
        <AnimatedNumbers :number="weather.temperature" />
        <sup>0</sup>
      </h1>
      <span>temperature</span>
    </article>
    <article class="info-card humidity">
      <h1>
        <AnimatedNumbers :number="weather.humidity" />
        <sup>%</sup>
      </h1>
      <span>humidity</span>
    </article>
    <article class="info-card wind">
      <h1>
        <AnimatedNumbers :number="weather.wind" />
        <sup>m/s</sup>
      </h1>
      <span>WSW wind</span>
    </article>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AnimatedNumbers from "./AnimatedNumbers";

export default {
  name: "Data",
  components: {
    AnimatedNumbers,
  },
  mounted() {},
  computed: {
    ...mapState(["weather"]),
  },
};
</script>
<style scoped>
.info {
  display: grid;
  margin: 10% auto;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  width: 50vw;
}

.info-card {
  padding: 15px;
  text-align: center;
  backdrop-filter: blur(30px);
  background: rgba(255 255 255 / 25%);
  border-radius: 15px;
  box-shadow: 0 0 2px rgba(0 0 0 / 25%);
  border: 1px solid rgba(0 0 0 / 25%);
}

h1 {
  font-size: 120px;
  margin: 0;
  letter-spacing: -5px;
  color: #999;
}

h1 sup {
  font-size: 48px;
  margin-left: -20px;
}

.temperature h1 {
  color: orange;
  font-size: 120px;
  margin: 0;
  letter-spacing: -10px;
  background: -webkit-linear-gradient(yellow, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info-card > span {
  color: #999;
}
</style>