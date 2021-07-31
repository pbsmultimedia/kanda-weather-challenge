<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
export default {
  name: "Threes",
  mounted() {
    let c = this.$refs.canvas;
    let ctx = c.getContext("2d");
    let center = c.width / 2;
    let width = 2;
    let space = 5;
    let rows = 5;
    let cols = 5;
    let plants = [];

    for (let k = 0; k < cols; k++) {
      plants[k] = {};

      width = width * 2;
      space = space + k;

      plants[k].width = width;

      let offset = ((width + space) * (cols - 1)) / 2;
      let start = center - offset;

      plants[k].positionX = [];
      plants[k].positionY = [];

      for (let i = 0; i < cols; i++) {
        plants[k].positionX.push(start + (width + space) * i);
        plants[k].positionY.push((width * k) / 4);
      }
    }

    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        ctx.beginPath();
        ctx.arc(
          plants[j].positionX[i],
          plants[j].positionY[i] + plants[j].width / 2,
          plants[j].width / 2,
          0,
          2 * Math.PI,
          false
        );
        ctx.fillStyle = "green";
        ctx.fill();

        // branch
        ctx.beginPath();
        ctx.rect(
          plants[j].positionX[i] - (3 * j) / 2,
          plants[j].positionY[i] + plants[j].width,
          3 * j,
          5 * j
        );
        ctx.fillStyle = "#fc0";
        ctx.fill();
      }
    }
  },
};
</script>