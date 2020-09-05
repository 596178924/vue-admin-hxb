<template>
  <div class="jumpAnchor">
    <p
      v-for="(item, index) in jumpList"
      :key="index"
      @click="floorJump(item.id)"
    >
      {{ item.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    jumpList: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    floorJump(item) {
      console.log(item);
      let jumpTo = document.getElementById(item);
      console.log(jumpTo, jumpTo.offsetTop);
      // document.body.scrollTo(0,jumpTo.offsetTop)
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
.jumpAnchor {
  width: 180px;
  padding: 20px 10px;
  position: fixed;
  right: 30px;
  top: 120px;
  background-color: #6ffffb;
  & > p {
    cursor: pointer;
    &:hover {
      background-color: red;
    }
  }
}
</style>
