<template>
	<div class="waterfall">
		<waterfall-plus v-if="dataList.length">
			<waterfall-item v-for="(v, i) in dataList" :key="i" :img-url="v.img.url">
				<template slot="footer">
					xxxxxx
				</template>
			</waterfall-item>
		</waterfall-plus>
	</div>
</template>
<script>
	import WaterfallPlus from './WaterfallPlus/index'
	import WaterfallItem from './WaterfallPlus/WaterfallItem'
	const LIST_LENGTH = 20
	export default {
		name: "",
		data() {
			return {
				dataList: []
			};
		},
		components: {
			WaterfallItem,
			WaterfallPlus
		},
		mounted() {
			this.getDataList()
		},
		methods: {
			getDataList() {
				let src = ""
				for (let i = 0, len = LIST_LENGTH; i < len; i++) {
					src="https://picsum.photos/200/" +
					this.getRandomIntSection(200, 400) +
					"?random=" +
					i;
					this.dataList.push({
						img: {
							url: src,
						}
					})
				}
				console.log(this.dataList)
			},
			getRandomIntSection(n, m) {
			  let number1 = Math.random() * (m - n + 1);
			  let number2 = Math.floor(number1);
			  return number2 + n;
			}
		}
	};
</script>

<style lang="scss" scoped="scoped">
	.waterfall {}
</style>
