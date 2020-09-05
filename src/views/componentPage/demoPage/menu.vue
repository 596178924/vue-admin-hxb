<template>
	<ul class="umenu">
		<li v-for="(item, index) in list" :key="index">
			<p>{{ item.name }}</p>
			<umenu :list="item.cList"></umenu>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'umenu',
	props: {
		list: Array
	},

	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped="scoped"></style>
