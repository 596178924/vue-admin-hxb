<template>
	<div class="videoplayer">
		<div id="mse"></div>
	</div>
</template>

<script>
import Player from 'xgplayer';
// import {Player} from '@/plugins/xgplayer/index.js';

export default {
	name: '',
	data() {
		return {};
	},
	mounted() {
		this.$nextTick(()=>{
			this.getVideoSrc()
		})
	},
	methods: {
		getVideoSrc(mountId = 'mse') {
			let player = new Player({
				id: mountId,
				url: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4',
				poster: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
			});
		}
	}
};
</script>

<style lang="scss" scoped="scoped"></style>
