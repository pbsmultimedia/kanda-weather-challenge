<template>
  <div class="balloon"></div>
</template>

<script>
export default {
  name: "Ballon",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.balloon {
  width: 5vh;
  height: 5vh;
  background: red;
  background-image: radial-gradient(
    farthest-corner at 70px 20px,
    rgba(255, 255, 255, 0.5) 0%,
    red 30%
  );
  border-radius: 100%;
  margin: 10vh auto 0;
  animation: move 10s ease-in-out infinite;
  position: relative;
  opacity: 0.5;
}

.balloon:before {
  content: "";
  position: absolute;
  width: 6px;
  height: 2px;
  background: linear-gradient(#aa0000, #990000);
  bottom: -13px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
}

.balloon:after {
  content: "";
  position: absolute;
  width: 1px;
  height: 10px;
  background: linear-gradient(#880000, #ff0000);
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  opacity: 0.5;
}

@keyframes move {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-50px) rotate(-5deg);
  }
  50% {
    transform: translateY(-50px) rotate(5deg);
  }
}
</style>
