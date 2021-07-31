<template>
  <div id="app">
    <!--
    <div class="test">test</div>
    -->
    <h1 class="location-title">Uyo, Nigeria - 12 hours weather forecast</h1>
    <GreyLayer />
    <Sky />
    <Soil />
    <Rain />
    <Data />
  </div>
</template>

<script>
import Sky from "./components/Sky";
import Soil from "./components/Soil";
import GreyLayer from "./components/GreyLayer";
import Rain from "./components/Rain";
import Data from "./components/Data";

export default {
  name: "App",
  components: {
    Sky,
    Soil,
    GreyLayer,
    Rain,
    Data,
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

#app {
}

.test {
  position: absolute;
  top: 200px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  padding: 15px;
  background: rgba(255 255 255 / 50%);
  backdrop-filter: blur(10px);
  border-radius: 5px;
}
</style>
