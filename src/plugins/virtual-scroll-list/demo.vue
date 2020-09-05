<template>
	<div class="about">
		<h1>This is an about page</h1>
		<div>
			<virtual-list :size="40" :remain="8">
				<div v-for="item of items" :key="item.id">{{ item }}</div>
			</virtual-list>
		</div>
	</div>
</template>

<script>
import virtualList from './index.js';
export default {
	// data() {
	// 	return {
	// 		items: []
	// 	};
	// },
	computed:{
		items(){
			return this.forss();
		}
	},
	methods: {
		forss() {
			let item = [];
			for (let i = 1; i <= 1000000; i++) {
				items.push({
					id: i,
					name: i + '12123d5a45ad56addadjak放假啊就恢复健康发号放假安徽科技发货方就按客户'
				});
			}
			return item
		}
	},
	created() {
		this.forss();
	},
	components: { 'virtual-list': virtualList }
};
</script>

<style lang="scss" scoped></style>
