<template>
	<ul id="TagsView">
		<li v-for="tag in viewRoute" :key="tag.path">
			<router-link
				:to="tag.path"
				@click.prevent="say(tag)"
			>
				{{tag.meta.title}}
			</router-link>
			<div>
				<button @click="deleteOneTags(tag)" v-if="!tag.meta.affix">删除</button>
				<button @click="deleteOtherTags(tag)">删除其他</button>
				<button @click="deleteAllTags()">删除所有</button>
				<button @click="RedirectTags(tag)">刷新页面</button>
			</div>
		</li>
	</ul>
</template>

<script>
import ScrollPane from './ScrollPane';
import path from 'path';

export default {
	components: { ScrollPane },
	data() {
		return {
			viewRoute:[]
		};
	},
	computed: {
		// RouterTagsView() {
		// 	return this.$store.getters.visitedViews;
		// }
	},
	watch: {
		$route() {
			this.addTags()
		},
		viewRoute(){
			// this.$router.push()
			// console.log(this.$route.path)
		}
	},
	mounted() {
		this.addTags()
	},
	methods: {
		addTags() {
			let {path,meta} = this.$route
			// console.log(path,meta)
			if(meta.title=='redirect') return ;
			if (this.viewRoute.some(v => v.path === this.$route.path)) return ;
			this.viewRoute.push({path,meta})
		},
		deleteOneTags(item){ //删除当前选中
			for (const [i, v] of this.viewRoute.entries()) {
				if (v.path === item.path) { // path 相同时，删除这一条
					this.viewRoute.splice(i, 1)
					if(this.isActive(v)){
						this.jump('/')
					}
					return ;
				}
			}
			
			// this.$router.push()
		},
		deleteOtherTags(item){//删除其他
			this.viewRoute = this.viewRoute.filter(v => { //过滤掉
				return v.meta.affix || v.path === item.path // 留下affix 和当前 path
			})
			if(!this.isActive(item)){//如果选定的路由不是当前页面，那路由就跳转到选定路由
				this.toLastView(item)
			}
		},
		deleteAllTags(){//删除全部
			if(this.viewRoute.length<=1) return ;//避免首页删除跳转首页的重复跳转
			this.viewRoute = this.viewRoute.filter(item=>{ // fliter, item 会遍历数组,找到匹配项，并返回
				return item.meta.affix == true //只保留 affix
			})
			this.jump('/')
		},
		isActive(route) {//判断是否为当前路由
		  return route.path === this.$route.path
		},
		toLastView(view){//跳转到viewRoute最后一个路由
			const viewPath = this.viewRoute.slice(-1)[0].path
			console.log("viewPath",viewPath)
			if (viewPath) {
			  this.$router.push({path:viewPath})
			}
			
		},
		jump(path){//跳转到路由
			this.$router.push({path:path})
		},
		RedirectTags(item){//刷新路由
			this.$router.replace({
				path:'/redirect' + item.path
			})  
		}
	}
};
</script>

<style lang="scss" scoped>
#TagsView{
	background-color: #f2f2f2;
	height: 80px;
	overflow: auto;
	li{
		display: flex;
	}
}
</style>
