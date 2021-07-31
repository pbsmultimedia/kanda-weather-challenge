<template>
  <div class="soil">
    <section></section>
  </div>
</template>

<script>
export default {
  name: "Soil",
  props: {},
};
</script>

<style scoped>
.soil {
  width: 100%;
  height: 40vh;
  background: linear-gradient(
    rgb(255, 220, 180),
    #9B7653 60%,
    rgb(59, 30, 2) 62%
  );
  position: absolute;
  bottom: 0;
  z-index: -1;
}
</style>
