<template>
	<div class="NavMenu">
		<el-menu :default-active="onRoutes" class="el-menu-vertical-demo"
		background-color='#00003a'
		text-color='#ffffff'
		:collapse="isCollapse"
		unique-opened
		router
		>
			<template v-for="item in routess">
				<template v-if="item.subs">
					<el-submenu :index="item.index" :key="item.index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span slot="title">{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
								<template slot="title">{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index">
						<i :class="item.icon"></i>
						<span slot="title">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'NavMenu',
	data() {
		return {
			isCollapse: false,
			routess:[
					{
						icon: 'el-icon-s-check',
						index: 'admin',
						title: '首页'
					},
					
					{
						icon: 'el-icon-user',
						index: 'componentPage',
						title: 'pages',
						subs:[
							
							{
								icon: 'el-icon-user',
								index: 'page1',
								title: 'page1'
							},
						]
					},
			]
		};
	},
	computed: {
		onRoutes() {
			return this.$route.path.replace('/', '');
		},
	},
	mounted() {
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.navSidebar {
	display: block;
	position: absolute;
	left: 0;
	top: 70px;
	bottom: 0;
	background-color: red;
	ul{
		height: 100%;
	}
	.el-menu:not(.el-menu--collapse) {
		width: 250px;
	}
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
