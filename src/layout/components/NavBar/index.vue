<template>
	<el-breadcrumb class="app-breadcrumb" separator="/">
	  <transition-group name="bread">
	    <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
	     <!-- <span v-if="item.redirect==='noRedirect'||item.children||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}-span</span>
	      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}-a</a> -->
		  <span v-if="item.redirect||index==levelList.length-1">{{ item.meta.title }}</span>
		  <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
	    </el-breadcrumb-item>
	  </transition-group>
	</el-breadcrumb>
</template>

<script>
import {compile} from 'path-to-regexp'
export default {
	name: 'NavBar',
	data() {
		return {
			levelList: null
		};
	},
	created() {
		this.getBreadcrumb();
	},
	watch: {
		$route(route) {
			if (route.path.startsWith('/redirect/')) {
				//如果是刷新页面就退出
				return;
			} else {
				this.getBreadcrumb();
			}
		}
	},

	methods: {
		getBreadcrumb() {
			let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
			const first = matched[0]
			if (!this.isDashboard(first)) {
			  // matched = [{ path: '/', meta: { title: '首页' }}].concat(matched)
			  console.log(this.$route)
			}
			this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);
			// console.log('levelList', this.levelList);
		},
		isDashboard(route) { //处理 数据
		  const name = route && route.meta.title
		  if (!name) {
		    return false
		  }
		  return name.trim().toLocaleLowerCase() === '首页'.toLocaleLowerCase()
		},
		pathCompile(path) {
		  // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
		  const { params } = this.$route
		  var toPath = compile(path)
		  return toPath(params)
		},
		handleLink(item) { //如果是父子级别
		  const { redirect, path } = item
		  console.log(redirect,path)
		  if (redirect) {
		    console.log('have redirect')
		    this.$router.push(redirect)
		    return
		  }
		  this.$router.push(this.pathCompile(path))
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.app-breadcrumb{
	color: white;
}
.breadcrumb-enter-active,
.breadcrumb-leave-active {
	transition: all 2s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
	opacity: 0;
	transform: translateX(20px);
}

.breadcrumb-move {
	transition: all 2s;
}

.breadcrumb-leave-active {
	position: absolute;
}
</style>
