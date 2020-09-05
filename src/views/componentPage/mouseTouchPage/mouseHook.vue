<template>
	<div id="mouseHook">
		
		
	</div>
</template>

<script type="text/javascript">
	import {
		TweenLite,
		TweenMax
	} from "gsap";
	export default {
		name: 'mouseHook',
		mounted() {
			// window.addEventListener("mousemove",this.move())
			// this.MouseMove();
		},
		beforeDestroy() {
			// window.removeEventListener("mousemove", this.move)
		},
		methods: {
			move() {
				console.log('move  ')
			},
			MouseMove(el, cl) {
				//监听鼠标移动
				window.addEventListener("mousemove", this.move);
			},
		}
	}
</script>

<style lang="scss" scoped>
	#mouseHook {
		background-color: #262626;
		font-family: 'Open Sans', sans-serif;
		overflow: hidden;
		height: inherit;
		position: relative;
	}
</style>
