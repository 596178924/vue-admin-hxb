<template>
	<div class="SideBarItem">
		<template v-if="hasOneShowingChild(item.children, item)">
			<el-menu-item :index="item.path">
				<span slot="title">{{ item.meta.title }}</span>
			</el-menu-item>
		</template>
		<el-submenu v-else :index="item.path">
			<template slot="title">
				<span>{{ item.meta.title }}</span>
			</template>
			<Side-Bar-Item v-for="child in item.children" :key="child.path" :item="child"></Side-Bar-Item>
		</el-submenu>
	</div>
</template>

<script>
import path from 'path';
import { isExternal } from '@/utils/validate';
export default {
	name: 'SideBarItem',
	props: {
		item: {
			type: Object,
			required: true
		},
		basePath: {
			type: String,
			default: ''
		}
	},
	methods: {
		// @click="ToPage(item)"
		ToPage(item){
			if(item.path!==this.$route.path){
				this.$router.push({path:item.path})
			}
		},
		hasOneShowingChild(children = [], item) {
			if(children.length === 1){
				return true
			}
			if(children.length === 0){
				return true
			}
			return false;
		},
	}
};
</script>

<style lang="scss" scoped="scoped"></style>
