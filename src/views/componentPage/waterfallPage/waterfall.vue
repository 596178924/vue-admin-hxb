<template>
	<div class="waterfall">
		<h-water></h-water>
	</div>
</template>
<script>
	import hwater from './mywaterFall/index.vue'
	export default {
		name: "",
		data() {
			return {
			};
		},
		components: {
			"h-water" : hwater
		},
		mounted() {
			
		},
		methods: {
		}
	};
</script>

<style lang="scss" scoped="scoped">
</style>
