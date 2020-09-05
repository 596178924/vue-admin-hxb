<template>
	<div class="lay">
		<SideBar></SideBar>
		<div id="lay-body">
			<!-- <NavBar></NavBar> -->
			<TagsView></TagsView>
			<layMain></layMain>
		</div>
	</div>
</template>

<script>
import { layFoot, layHead, layMain } from './model';
import {  SideBar, TagsView, NavBar } from './components'
export default {
	name: 'lay',
	components: {
		layHead,
		layMain,
		layFoot,
		SideBar,
		TagsView,
		NavBar
	},
	methods: {}
};
</script>

<style lang="scss" scoped="scoped">
// @import "@/styles/mixin.scss";
.lay{
	$padding:6vw;
	$FitWidth:calc(100vw - (12vw + 210px));
	// @include base-scrollbar; //引入mixin.scss的滚动条样式
	display: flex;
	position: relative;
    height: 100vh;
    width: 100%;
	// overflow-x: hidden;
	// background-image: url('https://picsum.photos/1220/920');
	background-image: url("../assets/backgroundImages/haiyang.jpg");
	
	// https://source.unsplash.com/random/800*600
	background-repeat: no-repeat;
	background-size: 100% 100%;
	// background-origin:content-box;
	// background-clip:content-box;
	background-attachment: fixed;
	background-position:center;
	padding: 0 $padding;
	#lay-body{
		// width: 100%;
		width: $FitWidth;
		padding-right: 10px;
		padding-left: 10px;
	}
}
</style>
