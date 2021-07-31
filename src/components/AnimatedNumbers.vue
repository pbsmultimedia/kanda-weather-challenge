<template>
  <span>
    {{ x }}
  </span>
</template>
<script>
export default {
  name: "AnimatedNumbers",
  data() {
    return {
      x: 0,
    };
  },
  props: {
    number: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.animatedNumber(this.number);
  },
  methods: {
    animatedNumber(value) {
      let i = setInterval(() => {
        if (this.x === value) {
          clearInterval(i);
        }
        this.x += 1;
      }, 1000 / value);
    },
  },
};
</script>