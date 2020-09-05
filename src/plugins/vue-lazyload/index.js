/*
	图片懒加载
*/
import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
	preLoad: 1.3,
	// error: 'https://picsum.photos/200/200',
	// loading: './static/jojoLoading.jpg',
	loading: 'https://picsum.photos/200/200',
	attempt: 1
})