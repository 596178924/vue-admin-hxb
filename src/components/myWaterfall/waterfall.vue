<template>
  <div class="waterfall" id="">
    <div id="wrap" class="wrap">
      <div class="item"><img src="./images/1.jpg" alt="" /></div>
      <div class="item"><img src="./images/2.jpg" alt="" /></div>
      <div class="item"><img src="./images/3.jpg" alt="" /></div>
      <div class="item"><img src="./images/4.jpg" alt="" /></div>
      <div class="item"><img src="./images/5.jpg" alt="" /></div>
      <div class="item"><img src="./images/6.jpg" alt="" /></div>
      <div class="item"><img src="./images/7.jpg" alt="" /></div>
      <div class="item"><img src="./images/8.jpg" alt="" /></div>
      <div class="item"><img src="./images/9.jpg" alt="" /></div>
      <div class="item"><img src="./images/10.jpg" alt="" /></div>
      <div class="item"><img src="./images/11.jpg" alt="" /></div>
      <div class="item"><img src="./images/12.jpg" alt="" /></div>
      <div class="item"><img src="./images/13.jpg" alt="" /></div>
      <div class="item"><img src="./images/14.jpg" alt="" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.wrap {
  width: auto;
  height: auto;
  position: relative;
  margin: 0 auto;
}
.item {
  float: left;
  width: 280px;
  height: auto;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: gray;
      opacity: 0.5;
    }
  }
}
</style>
