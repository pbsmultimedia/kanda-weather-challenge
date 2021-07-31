<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Rain",
  data() {
    return {
      lines: [],
    };
  },
  computed: {
    ...mapState(["weather"]),
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.setAttribute("width", "438");
    this.canvas.setAttribute("height", "600");

    let spacing = 10,
      xSpacing = 0,
      colors = ["#fff"],
      rdm = 0,
      i;

    for (i = 0; i < this.weather.rainProbability; i++) {
      rdm = Math.round(Math.random() * 3);
      xSpacing += spacing;
      this.lines.push({
        x: xSpacing,
        y: Math.round(Math.random() * this.canvas.height),
        width: 4,
        height: 10,
        speed: rdm * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    this.draw();
  },
  methods: {
    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = 0; i < this.weather.rainProbability; i++) {
        this.ctx.fillStyle = this.lines[i].color;

        this.ctx.globalAlpha = 0.75;
        this.ctx.fillRect(
          Math.round(Math.random() * this.canvas.width),
          Math.round(Math.random() * this.canvas.height),
          1,
          this.lines[i].height
        );
        this.ctx.globalAlpha = 1;

        this.lines[i].y += this.lines[i].speed;

        if (this.lines[i].y > this.canvas.height) {
          this.lines[i].y = 0 - this.lines[i].height;
        }
      }
      requestAnimationFrame(this.draw);
    },
  },
};
</script>

<style scoped>
canvas {
  position: absolute;
  margin: 20vh auto;
  top: 0;
  right: 0;
  left: 0;
}
</style>