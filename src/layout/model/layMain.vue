<template>
	<div id="layMain">
		<router-view></router-view>
	</div>
</template>
<style lang="scss" scoped="scoped">
// @import "@/styles/mixin.scss";
#layMain{
	width: 100%;
	// min-height: 20vh;
	// @include base-scrollbar;
	height: calc( 100% - 100px);
	background-color: rgba($color: #919191, $alpha: 0.8);
	margin-top: 10px;
	// overflow-x: hidden;
	overflow-y: scroll;
	// padding: 0 10px;
}
</style>
