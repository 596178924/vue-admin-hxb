/*
	图片放大查看组件
*/
import Vue from 'vue';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
// import Viewer from "v-viewer/src/component.vue" //组件内引用
Vue.use(Viewer)
Viewer.setDefaults({
	Options: {
		'inline': true, //启动inline模式
		'button': true, //显示右上角关闭按钮
		'navbar': true, //显示缩略图导航
		'title': true, //显示当前图片的标题
		'toolbar': true, //显示工具栏
		'tooltip': true, //显示缩放比例
		'movable': true, //图片可否移动
		'zoomable': true, //图片可否缩放
		'rotatable': true, //图片可否旋转
		'scalable': true,  //图片可否翻转
		'transition': true, //使用CSS3过渡状态
		'fullscreen': true, //播放时是否全屏
		'keyboard': true, //是否支持键盘
		'url': 'data-source'  //设置大图片的url
	}
})
