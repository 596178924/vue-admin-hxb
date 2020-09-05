import Vue from "vue";
import VueRouter from "vue-router";
import lay from '../layout/lay.vue'
import layer from '../views/layer/index.vue'

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
/*模块*/
const textPage = {
	path: "/textPage",
	redirect: "/truncate",
	// component: () => import('@/views/componentPage/textPage/index'),
	component: layer,
	meta: {
		title: 'textPage'
	},
	children: [{
		path: "/truncate",
		meta: {
			title: 'truncate'
		},
		component: () => import('@/views/componentPage/textPage/truncate'),
	}, ]
}
const editorPage = {
	path: "/editorPage",
	redirect: "/editor",
	// component: () => import('@/views/componentPage/textPage/index'),
	component: layer,
	meta: {
		title: 'editorPage'
	},
	children: [{
			path: "/editor",
			meta: {
				title: 'editor'
			},
			component: () => import('@/views/componentPage/editorPage/editor'),
		},
		{
			path: "/Tinymce",
			meta: {
				title: 'Tinymce'
			},
			component: () => import('@/views/componentPage/editorPage/Tinymce'),
		}
	]
}
const indexPage = {
	path: "/inputPage",
	redirect: "/emailInput",
	// component: () => import('@/views/componentPage/inputPage/index'),
	component: layer,
	meta: {
		title: 'inputPage'
	},
	children: [{
		path: "/emailInput",
		meta: {
			title: 'emailInput'
		},
		component: () => import('@/views/componentPage/inputPage/emailInput'),
	}]
}
const imagePage = {
	path: "/imagePage",
	redirect: "/imageOpenBox",
	// component: () => import('@/views/componentPage/imagePage/index'),
	component: layer,
	meta: {
		title: 'imagePage'
	},
	children: [{
		path: "/imageOpenBox",
		meta: {
			title: 'imageOpenBox'
		},
		component: () => import('@/views/componentPage/imagePage/imageOpenBox'),
	}]
}
const videoPage = {
	path: "/videoPage",
	redirect: "/videoplayer",
	// component: () => import('@/views/componentPage/videoPage/index'),
	component: layer,
	meta: {
		title: 'videoPage'
	},
	children: [{
			path: "/videoplayer",
			meta: {
				title: 'videoplayer'
			},
			component: () => import('@/views/componentPage/videoPage/videoplayer'),
		},
		{
			path: "/musicPlayer",
			meta: {
				title: 'musicPlayer'
			},
			component: () => import('@/views/componentPage/videoPage/musicPlayer'),
		},
	]
}
const cssPage = {
	path: "/cssPage",
	redirect: "/wow-animate",
	// component: () => import('@/views/componentPage/cssPage/index'),
	component: layer,
	meta: {
		title: 'cssPage'
	},
	children: [{
		path: "/wow-animate",
		meta: {
			title: 'wow-animate'
		},
		component: () => import('@/views/componentPage/cssPage/wow-animate'),
	}]
}
const mouseTouchPage = {
	path: "/mouseTouchPage",
	redirect: "/overall",
	// component: () => import('@/views/componentPage/cssPage/index'),
	component: layer,
	meta: {
		title: 'mouseTouchPage'
	},
	children: [{
			path: "/overall",
			meta: {
				title: 'overall'
			},
			component: () => import('@/views/componentPage/mouseTouchPage/overall'),
		},
		{
			path: "/mouseHook",
			meta: {
				title: '鼠标钩子函数测试'
			},
			component: () => import('@/views/componentPage/mouseTouchPage/mouseHook'),
		},
	]
}
const waterfallPage = {
	path: "/waterfallPage",
	redirect: "/waterfall",
	// component: () => import('@/views/componentPage/cssPage/index'),
	component: lay,
	meta: {
		title: 'waterfallPage'
	},
	children: [{
			path: "/waterfall",
			meta: {
				title: 'waterfall'
			},
			component: () => import('@/views/componentPage/waterfallPage/waterfall'),
		},
	]
}

const tablePage = {
	path: "/tablePage",
	redirect: "/table",
	// component: () => import('@/views/componentPage/cssPage/index'),
	component: lay,
	meta: {
		title: 'tablePage'
	},
	children: [{
			path: "/table",
			meta: {
				title: 'table'
			},
			component: () => import('@/views/componentPage/tablePage/table'),
		},
	]
}

const componentPage = {
	path: "/componentPage",
	redirect: {
		path: "/page1"
	},
	component: lay,
	meta: {
		title: 'componentPage'
	},
	children: [{
			path: "/page1",
			meta: {
				title: 'page1'
			},
			component: () => import('@/views/componentPage/demoPage/page1'),
		},
		{
			path: "page2",
			hidden: true,
			meta: {
				title: 'page2',
				roles: ['admin']
			},
			component: () => import('@/views/componentPage/demoPage/page2'),
		},
		{
			path: "/tree",
			meta: {
				title: 'tree'
			},
			component: () => import('@/views/componentPage/demoPage/tree'),
		},

	]
}
/*业务路由*/
export const asyncRoutes = [
	{
		path: "/",
		redirect: {
			path: "/index"
		},
		component: lay,
		meta: {
			title: '首页'
		},
		children: [{
			path: "index",
			meta: {
				title: 'index首页',
				affix: true
			},
			component: () => import('@/views/index'),
		}]
	},
	{
		path: "/redirect",
		component: lay,
		hidden: true,
		children: [{
			path: "/redirect/:path(.*)",
			hidden: true,
			meta: {
				title: 'redirect'
			},
			component: () => import("@/views/redirect/index"),
		}, ],
	},
	componentPage,
	tablePage
];
export const constantRoutes = [];//不需要验证的路由

const createRouter = () => new VueRouter({
	mode: "history",
	scrollBehavior: () => ({
		y: 0,
	}),
	routes: asyncRoutes
});
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }
const router = createRouter()

export default router;
