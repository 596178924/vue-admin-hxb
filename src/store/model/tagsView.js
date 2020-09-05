const state = {
	t: ' this is t of vuex',
	visitedViews: [],
	cachedViews: []
}

const mutations = {
	CHANGE_T: (state, i) => {
		console.log(state.t)
		state.t = i
	},
	ADD_VISITED_VIEW: (state, view) => { //添加元素
		console.log(view)
		if (state.visitedViews.some(v => v.path === view.path)) return
		state.visitedViews.push(
		  Object.assign({}, view, {
		    // title: view.meta.title || 'no-name'
		  })
		)
	},
	ADD_CACHED_VIEW: (state, view) => {
		if (state.cachedViews.includes(view.name)) return
		if (!view.meta.noCache) {
			state.cachedViews.push(view.name)
		}
	},

	DEL_VISITED_VIEW: (state, view) => { //删除元素
		for (const [i, v] of state.visitedViews.entries()) {
			// entries 创建可迭代对象
			if (v.path === view.path) { // path 相同时，删除这一条
				state.visitedViews.splice(i, 1)
				break
			}
		}
	},
	DEL_CACHED_VIEW: (state, view) => {
		const index = state.cachedViews.indexOf(view.name)
		index > -1 && state.cachedViews.splice(index, 1)
	},

	DEL_OTHERS_VISITED_VIEWS: (state, view) => { //删除其他元素
		state.visitedViews = state.visitedViews.filter(v => { //过滤掉
			return v.meta.affix || v.path === view.path // 留下affix 和当前 path
		})
	},
	DEL_OTHERS_CACHED_VIEWS: (state, view) => {
		const index = state.cachedViews.indexOf(view.name)
		if (index > -1) {
			state.cachedViews = state.cachedViews.slice(index, index + 1)
		} else {
			// if index = -1, there is no cached tags
			state.cachedViews = []
		}
	},

	DEL_ALL_VISITED_VIEWS: state => { //删除所有 除 affix
		// keep affix tags
		const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
		state.visitedViews = affixTags
	},
	DEL_ALL_CACHED_VIEWS: state => {
		state.cachedViews = []
	},

	UPDATE_VISITED_VIEW: (state, view) => {
		for (let v of state.visitedViews) {
			if (v.path === view.path) {
				v = Object.assign(v, view)
				break
			}
		}
	}
}

const actions = {
	changeT({
		commit
	}, T) {
		commit('CHANGE_T', T)
	},
	addView({
		dispatch
	}, view) {
		dispatch('addVisitedView', view)
		// dispatch('addCachedView', view)
	},
	addVisitedView({
		commit
	}, view) {
		commit('ADD_VISITED_VIEW', view)
	},
	addCachedView({
		commit
	}, view) {
		commit('ADD_CACHED_VIEW', view)
	},

	delView({
		dispatch,
		state
	}, view) {
		return new Promise(resolve => {
			dispatch('delVisitedView', view)
			dispatch('delCachedView', view)
			resolve({
				visitedViews: [...state.visitedViews],
				cachedViews: [...state.cachedViews]
			})
		})
	},
	delVisitedView({
		commit,
		state
	}, view) {
		return new Promise(resolve => {
			commit('DEL_VISITED_VIEW', view)
			resolve([...state.visitedViews])
		})
	},
	delCachedView({
		commit,
		state
	}, view) {
		return new Promise(resolve => {
			commit('DEL_CACHED_VIEW', view)
			resolve([...state.cachedViews])
		})
	},

	delOthersViews({
		dispatch,
		state
	}, view) {
		return new Promise(resolve => {
			dispatch('delOthersVisitedViews', view)
			dispatch('delOthersCachedViews', view)
			resolve({
				visitedViews: [...state.visitedViews],
				cachedViews: [...state.cachedViews]
			})
		})
	},
	delOthersVisitedViews({
		commit,
		state
	}, view) {
		return new Promise(resolve => {
			commit('DEL_OTHERS_VISITED_VIEWS', view)
			resolve([...state.visitedViews])
		})
	},
	delOthersCachedViews({
		commit,
		state
	}, view) {
		return new Promise(resolve => {
			commit('DEL_OTHERS_CACHED_VIEWS', view)
			resolve([...state.cachedViews])
		})
	},

	delAllViews({
		dispatch,
		state
	}, view) {
		return new Promise(resolve => {
			dispatch('delAllVisitedViews', view)
			dispatch('delAllCachedViews', view)
			resolve({
				visitedViews: [...state.visitedViews],
				cachedViews: [...state.cachedViews]
			})
		})
	},
	delAllVisitedViews({
		commit,
		state
	}) {
		return new Promise(resolve => {
			commit('DEL_ALL_VISITED_VIEWS')
			resolve([...state.visitedViews])
		})
	},
	delAllCachedViews({
		commit,
		state
	}) {
		return new Promise(resolve => {
			commit('DEL_ALL_CACHED_VIEWS')
			resolve([...state.cachedViews])
		})
	},

	updateVisitedView({
		commit
	}, view) {
		commit('UPDATE_VISITED_VIEW', view)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
