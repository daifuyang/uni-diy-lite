<template>
	<view>
		<view v-for="(item, i) in render" :key="i">
			<!-- 如果是swiper -->
			<template v-if="item.type == 'swiper'">
				<my-swiper :indicator-dots="item.config.indicatorDots" :indicator-color="item.config.indicatorColor"
				 :indicator-active-color="item.config.indicatorActiveColor" :circular="item.config.circular" :autoplay="item.config.autoplay"
				 :interval="item.config.interval" :duration="item.config.duration" :vertical="item.config.vertical" :render="item.data" />
			</template>

			<!-- 如果是搜索 -->
			<template v-else-if="item.type == 'search'">
				<search />
			</template>

			<!-- 如果是宫格 -->
			<template v-else-if="item.type == 'grid'">
				<grid :config="item.config" :render="item.data"/>
			</template>

			<!-- 如果是列表 -->
			<template v-else-if="item.type == 'list'">
				<view class="">
					<my-list :config="item.config" :render="item.data"/>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				render: [{
						type: "swiper",
						data: [{
								"name": "轮播一",
								"image": "http://428195.s81i.faiusr.com/2/101/AFEIo5EaEAIYACC3oIrjBSjYyZnpAjDuBTjoAkBl.jpg",
								"link": "",
								"target": ""
							},
							{
								"name": "轮播二",
								"image": "http://428195.s81i.faiusr.com/2/101/AFEIo5EaEAIYACC4oIrjBSi0raAoMO4FOOgCQGU.jpg",
								"link": "",
								"target": ""
							}
						],
						config: {
							indicatorDots: true,
							indicatorColor: "#cccccc",
							indicatorActiveColor: "#ffffff",
							circular: true,
							autoplay: true,
							vertical: false,
							interval: 3000,
							duration: 1000
						}
					},
					{
						type: "search",
						data: [],
						config: {
							background: "#ffffff",
							padding: "0",
							margin: "0"
						}
					},
					{
						type: "grid",
						data: [{
								image: "http://www.wxapp.store/attachment/images/2/2019/09/HCHYRzh8zZQg4g0GWuCG94uEG48YwD.svg",
								name: "听音频",
								page: "/pages/page/index?name='听音频'"
							},
							{
								image: "http://www.wxapp.store/attachment/images/2/2019/09/JA55ciluH3egz11izg5K9KUuCgh9H6.svg",
								name: "看视频",
								page: "/pages/page/index?name='看shi频'"
							},
							{
								image: "http://www.wxapp.store/attachment/images/2/2019/09/VtK09tc0Qq50KeT8uX028Q9Tz2qKku.svg",
								name: "读书",
								page: "/pages/page/index?name='读书'"
							}
						],
						config: {
							background: "#ffffff",
							padding: "0 0 20rpx 0",
							margin: "0 0 20rpx 0",
							num: "3"
						}
					},
					{
						"type": "list",
						"data": [],
						config: {
							background: "#ffffff",
							padding: "0",
							margin: "0 0 20rpx 0"
						}
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
</style>
