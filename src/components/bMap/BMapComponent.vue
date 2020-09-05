<template>
	<div id="map"></div>
</template>
<script>
import {loadBMap} from '@/plugins/loadBMap.js';
export default {
	name: 'Map',
	data() {
		return {};
	},
	methods: {
		createMap(BMap) {//BMap
			/* eslint-disable */
			// 创建Map实例
			let map = new BMap.Map('map');
			// 初始化地图,设置中心点坐标和地图级别
			map.centerAndZoom(new BMap.Point(116.404, 28.915), 10);
			//添加地图类型控件
			map.addControl(
				new BMap.MapTypeControl({
					mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
				})
			);
			// 设置地图显示的城市 此项是必须设置的
			map.setCurrentCity('北京');
			//开启鼠标滚轮缩放
			map.enableScrollWheelZoom(true);
			/* eslint-enable */
		}
	},
	mounted() {
		loadBMap().then(res => this.createMap(res));
	},
	deactivated() {
		
	}
};
</script>
<style scoped lang="scss">
#map {
	min-height: 600px;
}
</style>
