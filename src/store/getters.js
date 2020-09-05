const getters = {
  permission_routes: state => state.permission.routes,
  visitedViews: state => state.tagsView.visitedViews,
  vuex_T:state => state.tagsView.t,
}
export default getters
