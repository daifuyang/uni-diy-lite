<script>
	export default {
		globalData: {
			tabBar: {
				"color": "#7A7E83",
				"selectedColor": "#3cc51f",
				"borderStyle": "black",
				"backgroundColor": "#ffffff",
				"list": [{
					"pagePath": "/pages/index/index",
					"iconPath": "",
					"selectedIconPath": "http://www.wxapp.store/attachment/images/2/2019/09/UyFlP0roSRgrnc0OPuTfc6Y6nOy6Rt.svg",
					"text": "首页"
				}, {
					"pagePath": "/pages/page/index",
					"iconPath": "http://www.wxapp.store/attachment/images/2/2019/09/RfFBY2n5z8425PqKApKNqFhSaNHInp.svg",
					"selectedIconPath": "",
					"text": "我的"
				}]
			}
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("/static/css/style.css");
	@import url("/static/css/iconfont.css");
</style>
