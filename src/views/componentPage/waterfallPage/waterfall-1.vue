<template>
  <div>
    <div class="masonry" id="" ref="masonry">
      <div class="item" v-for="(it, im) in imgsArr" :key="im" ref="item">
        <img v-lazy="it.src" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      masonryList: [],
      imgsArr: [
        { src: require("./image/1.jpg") },
        { src: require("./image/2.jpg") },
        { src: require("./image/3.jpg") },
        { src: require("./image/4.jpg") },
        { src: require("./image/5.jpg") },
        { src: require("./image/6.jpg") },
        { src: require("./image/7.jpg") },
        { src: require("./image/8.jpg") },
        { src: require("./image/9.jpg") },
        { src: require("./image/10.jpg") },
        { src: require("./image/11.jpg") },
        { src: require("./image/12.jpg") },
        { src: require("./image/13.jpg") },
        { src: require("./image/14.jpg") }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      // this.getList();
      // console.log(this.masonryList);
    });
  },
  methods: {
    getList() {
      let _src = "";
      let arr = [];
      for (let i = 1; i < 16; i++) {
        _src =
          "https://picsum.photos/200/" +
          this.getRandomIntSection(200, 400) +
          "?random=" +
          i;
        arr.push({ src: _src });
      }
      this.masonryList = arr;
    },
    getRandomIntSection(n, m) {
      let number1 = Math.random() * (m - n + 1);
      let number2 = Math.floor(number1);
      return number2 + n;
    }
  }
};
</script>
<style lang="scss" scoped="scoped">
// @import "../../../styles/animate.css";
// @import "./styles/column.scss";
// @import "./styles/flexBox.scss";
</style>
