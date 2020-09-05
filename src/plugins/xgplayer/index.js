/*
	西瓜视频播放器
*/
/*
	vue.config.js =>
	chainWebpack: config => {
		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule
			.use('raw-loader')
			.loader('raw-loader')
	}
	cmd =>
	npx xgplayer eject [targetDir] [skinName]
*/
import xgPlayer from 'xgplayer';
import './.xgplayer/skin/index.js';
export default{
	xgPlayer
}

