<template>
	<div id="SideBar">
		<el-menu
			id="SideBar-menu"
			router
			:default-active="activeMenu"
		>
			<side-bar-item v-for="(route,i) in routes" :item="route" :key="i"/>
		</el-menu>
	</div>
</template>

<script>
import SideBarItem from './SideBarItem.vue';
import { mapGetters } from 'vuex'
export default {
	name: 'SideBar',
	components: {
		'side-bar-item': SideBarItem
	},
	data() {
		return {
			// res: []
		};
	},
	mounted() {
		// console.log(this.$store.state.permission,1111111111)
		// console.log(this.routes)
	},
	computed:{
		...mapGetters([
		  'permission_routes'
		]),
		routes(){
			return this.routesSplice(this.permission_routes)
		},
		activeMenu() {
		  const route = this.$route
		  const { meta, path } = route
		  // if set path, the sidebar will highlight the path you set
		  if (meta.activeMenu) {
		    return meta.activeMenu
		  }
		  return path
		},
	},
	methods: {
		routesSplice(routes){
			for(let i=0;i<routes.length;i++){
				if(routes[i].hidden){
					routes.splice(i,1)
				}
				if(routes[i].children){
					this.routesSplice(routes[i].children)
				}
			}
			return routes;
		}
	}
};
</script>

<style scoped="scoped" lang="scss">
#SideBar {
	min-width: 200px;
	height: 100%;
	background-color: rgba($color: #bfbfbf, $alpha: 0.6);
	overflow-y: scroll;
	overflow-x: hidden;
	&::-webkit-scrollbar {display:none}
	&::-ms-scrollbar {display:none}
	&::-moz-scrollbar {display:none}
	&::-o-scrollbar {display:none}
	&::scrollbar {display:none}
	// #SideBar-menu{
	// 	overflow-y: scroll;
	// 	overflow-x: hidden;
	// }
}
</style>
