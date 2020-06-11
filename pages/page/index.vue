<template>
	<view>
		我是自定义page页面 当前页面{{name}}
		<tabBar :render="tabBar" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: ""
			}
		},
		onLoad(options) {
			this.tabBar = getApp().globalData.tabBar;
			console.log(Object.keys(options).length);
			if (Object.keys(options).length > 0 && options.name !== undefined) {
				this.name = options.name
			}
		},
		methods: {
			openPage() {
				uni.navigateTo({
					url: "/pages/page/index"
				})
			}
		}
	}
</script>

<style>

</style>
