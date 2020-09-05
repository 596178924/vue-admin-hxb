<template>
	<div class="">
	  做一个自动化的过滤器样式生成器<br/>
	  “https://codepen.io/khr2003/pen/GwdaEG?editors=1010”
	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return{
				backgroundImg:'https://source.unsplash.com/1600x900/?nature,water',// 网上的随机图片链接
				style: { filter: "", width: "100vw", shadow: "" },
				      hideonout: false,
				      showInfo: false,
				      styleObj: {},
				      dropshadow: [
				        {
				          name: "x-offset",
				          amount: 0,
				          max: 100,
				          min: -100,
				          unit: "px",
				          step: 1
				        },
				        {
				          name: "y-offset",
				          amount: 0,
				          max: 100,
				          min: -100,
				          unit: "px",
				          step: 1
				        },
				        {
				          name: "blur",
				          amount: 0,
				          max: 100,
				          min: 0,
				          unit: "px",
				          step: 1
				        }
				      ],
				      filterStyle: [
				        {
				          name: "blur",
				          amount: 0,
				          max: 100,
				          unit: "px",
				          step: 1
				        },
				        {
				          name: "brightness",
				          amount: 1,
				          max: 10,
				          unit: "",
				          step: 0.25
				        },
				        {
				          name: "contrast",
				          amount: 1,
				          max: 10,
				          unit: "",
				          step: 0.25
				        },
				        {
				          name: "grayscale",
				          amount: 0,
				          max: 100,
				          unit: "%",
				          step: 1
				        },
				        {
				          name: "hue-rotate",
				          amount: 0,
				          max: 360,
				          unit: "deg",
				          step: 1
				        },
				        {
				          name: "invert",
				          amount: 0,
				          max: 100,
				          unit: "%",
				          step: 1
				        },
				        {
				          name: "saturate",
				          amount: 1,
				          max: 10,
				          unit: "",
				          step: 0.25
				        },
				        {
				          name: "sepia",
				          amount: "0",
				          max: 100,
				          unit: "%",
				          step: 1
				        },
				        {
				          name: "opacity",
				          amount: "100",
				          max: 100,
				          unit: "%",
				          step: 1
				        }
				      ]
			}
		},
		methods:{
			
		}
	}
</script>

<style  lang="scss" scoped="scoped">
</style>
