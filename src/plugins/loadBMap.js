/**
 * 动态加载百度地图api函数
 * @param {String} ak  百度地图AK，必传
 * 
 * 默认ak ：3mn83YpfI9VdPSZg1DfuK7lg0UqRljwt
 */
export function loadBMap( ak='3mn83YpfI9VdPSZg1DfuK7lg0UqRljwt' ) {
	return new Promise(function(resolve, reject) {
		if (typeof window.BMap !== 'undefined') {
			resolve(window.BMap)
			return true
		}
		window.onBMapCallback = function() {
			resolve(window.BMap)
		}
		let script = document.createElement('script')
		script.type = 'text/javascript'
		script.src = 'http://api.map.baidu.com/api?v=3.0&ak=' + ak + '&callback=onBMapCallback'
		script.onerror = reject
		document.head.appendChild(script)
	})
}
export function delBMap(){
	return 
}