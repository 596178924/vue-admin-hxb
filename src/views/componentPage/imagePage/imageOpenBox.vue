<template>
	<div class="imageOpenBox">
		<!-- <div class="open-box is-open" @click="openimg">
			<img :src="img_src" alt="">
		</div> -->
		<!-- <viewer :images="photo" class='image_open'>
			<img v-for="(src, index) in photo" :src="src" :key="index" />
		</viewer> -->
		<img v-lazy="img_src" alt="">
	</div>
</template>

<script>
import img1 from '../../../assets/backgroundImages/012AJ525-21.jpg';
import errorImg from '../../../assets/backgroundImages/可dio鸭.png';
// import Viewer from '../../../plugins/v-viewer/index.js'
export default {
	name: '',
	data() {
		return {
			// img_src: 'https://picsum.photos/1000/400',
			img_src: require("@/plugins/vue-lazyload/static/jojoLoading.jpg"),
			photo: ['https://picsum.photos/200/200', 'https://picsum.photos/300/200', 'https://picsum.photos/250/200']
		};
	},
	methods: {
		openimg() {}
	}
};
</script>

<style lang="scss" scoped="scoped">
.imageOpenBox {
	.image_open {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		.viewer-title {
			display: none;
		}
		img {
			width: 100%;
		}
	}
}
</style>
