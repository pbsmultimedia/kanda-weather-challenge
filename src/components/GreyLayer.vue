<template>
  <div class="grey-layer"></div>
</template>

<script>
export default {
  name: "GreyLayer",
  props: {},
};
</script>

<style scoped>
.grey-layer {
  width: 100%;
  height: 100%;
  background: #999;
  position: absolute;
  opacity: 0;
  top: 0;
}
</style>