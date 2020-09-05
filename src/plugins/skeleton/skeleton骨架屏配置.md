
### ps：配置完成后要重新运行项目才能实现
### entry-skeleton.js
```
import Vue from 'vue'
import Skeleton from './Skeleton.vue';
// 创建一个骨架屏 Vue 实例  配置在vue.config.js中
export default new Vue({
    components: {
        Skeleton
    },
    template: '<skeleton id="skeleton" />'
});
```

### Skeleton.vue
```
<template>
	div...
</template>
```

### vue.config.js
```
const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')

module.exports = {
	configureWebpack: (config) => {
		config.plugins.push(new SkeletonWebpackPlugin({
			webpackConfig: {
				entry: {
					app: path.join(__dirname, '.../entry-skeleton.js')//配置相应放置文件的路径
				}
			},
			minimize: true,
			quiet: true,
			router: {
				mode: 'hash',
				routes: [{
					path:'/',skeletonId:'skeleton'
				}]//可以分别配置路由，再多写几个骨架屏页面就行了
			}
		}))
	},
	// css相关配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true,
	}
};
```
