<template>
  <div ref="main" :id="mainId">
    <!-- <h2 v-if="mainList" :class="[ItemClassName ? ItemClassName : 'main-item']">
      没有数据{{ mainList }}
    </h2>
    <div
      v-else
      :class="[Items ? Items : 'main-item']"
      v-for="(it, ix) in mainList"
      :key="ix"
    >
      <slot name="content"></slot>
    </div> -->
    <div class="main-flex">
      <div
        class="demoDIV main-item"
        :style="it.styles"
        v-for="(it, ix) in demolist"
        :key="ix"
      ></div>
    </div>
    <!-- <div class="h-loading"></div> -->
    <!-- <div id="UseMore">加载更多</div> -->
    <!-- <div id="NoMore">已经没有了</div> -->
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      demolist: [],
	  
	  WindowCol:0,
	  
	  many:5,
	  // demoHeightList:[]
    };
  },
  props: {
    scrollName: {
      //滚动的区域-不给就是window
      type: String,
      default: function() {
        return "window";
      }
    },
    mainId: {
      type: String,
      default: "waterFall"
    },
    ItemClassName: {
      type: String
      // default: "waterFall-Items"
    },
    mainList: {
      //拿到的数据
      type: Array,
      default: function() {
        return [];
      }
    },
    itemWidth: {
      type: Number,
      default: 220
    }
  },
  created() {
    window.addEventListener("resize", this.setWaterFall);
    this.getdemolist(10);
  },
  computed: {},
  mounted() {
    this.setItemStyle("demoDIV");
  },
  methods: {
    getdemolist() { //初始化
      //mock
      function setHeight() {
        return Math.floor((Math.random().toFixed(2) / 2) * 1000 + 100);
      }
      let wh = "";
	  let styles = "";
	  let position = "";
      let arr = [];
      for (let i = 0; i < this.many; i++) {
        wh = "height:" + setHeight() + "px;width:" + this.itemWidth + "px;";
		position = ""
		styles = wh
        // console.log(wh);
        arr.push({ styles: styles });
      }
      this.demolist = arr;
    },
    setWaterFall() {
      //其实是拿到宽度进行布局，和window窗口并无关系
	  let col = this.setCol();
	  if(this.WindowCol!==col){
		  this.WindowCol = col
	  }
      console.log(col);
	  this.getdemolist(this.many)
    },
    setItemStyle(itemName) {//赋予positoin数值
      let div = document.getElementById("waterFall");
      // console.log(div.offsetHeight);
      let item = document.getElementsByClassName(itemName);
      for (let i = 0; i < item.length; i++) {
        console.log(item[i].offsetHeight);
      }
    },
    setCol() {
      //设置列数
      return Math.floor(this.$refs.main.offsetWidth / this.itemWidth);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWaterFall);
  }
};
</script>
<style lang="scss" scoped="scoped">
.demoDIV {
  // height: 160px;
  color: red;
  border: 10px solid;
  border-color: #8effcc #ffa2f8 #ffc941 #b0eaff;
}
.main-item {
	position: absolute;
	top: 0;
	left: 0;
}
.main-flex {
	position: relative;
}
</style>
