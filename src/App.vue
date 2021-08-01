<template>
  <div id="app">
    <h1 class="location-title">Uyo, Nigeria - 12 hours weather forecast</h1>
    <Sky />
    <Soil />
    <Rain v-if="weather.rainProbability > 33" />
    <Data />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Sky from "./components/Sky";
import Soil from "./components/Soil";
import Rain from "./components/Rain";
import Data from "./components/Data";

export default {
  name: "App",
  components: {
    Sky,
    Soil,
    Rain,
    Data,
  },
  computed: {
    ...mapState(["weather"]),
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Arial";
}

.location-title {
  color: #fff;
  text-align: center;
  opacity: 0.5;
}
</style>
