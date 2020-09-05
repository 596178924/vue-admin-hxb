import router from './index.js'
import store from '../store/index.js'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false })
router.beforeEach(async(to, from, next) =>{
	NProgress.start()

	if(to.meta.title!=="redirect"){
		const accessRoutes = await store.dispatch('permission/generateRoutes')
		console.log(accessRoutes)
		// console.log('store router ')
		// router.addRoutes(accessRoutes)
	}
	next();
	// NProgress.done()
})
router.afterEach(() => {
  NProgress.done()
})