import {
	asyncRoutes,
	constantRoutes
} from '@/router';

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes) {
	const res = []

	routes.forEach(route => {
		const tmp = { ...route };
		if (tmp.children) {
			tmp.children = filterAsyncRoutes(tmp.children)
		}
		res.push(tmp)
	})
	return res
}

const state = {
	routes: [],
	addRoutes: []
}

const mutations = {
	SET_ROUTES: (state, routes) => {
		state.addRoutes = routes
		// let arr = [];//constantRoutes 这个数组没有在哪里
		// state.routes = arr.concat(routes) //合并数组
		state.routes = constantRoutes.concat(routes)
		
	}
}

const actions = {
	generateRoutes({
		commit
	}) {
		return new Promise(resolve => { //处理权限
			let accessedRoutes = filterAsyncRoutes(asyncRoutes)
			console.log(accessedRoutes)
			commit('SET_ROUTES', accessedRoutes)
			resolve(accessedRoutes)
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
