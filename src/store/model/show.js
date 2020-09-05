
const state ={
	show1:true
}
const mutations = {
	UN_SHOW: (state, boo) =>{
		state.show1 = boo
	}
}
const actions = {
	unShow({commit},boo){
		commit('UN_SHOW',boo)
	}
}
const getters = {
	show1:state => state.show1
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}