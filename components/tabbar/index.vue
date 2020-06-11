<template>
	<view :style="'background:' + render.backgroundColor + ';border-top:2rpx solid ' + (render.borderStyle == 'black' ? '#eee' : '#fff') + ';padding:8rpx 0;'"
	 class="tabBar flex">
		<template v-for="(item,i) in render.list">
			<view @click="setTab(i,item)" :key="i" class="item">
				<view class="icon-wrap">
					<template v-if="active == i">
						<image :src="item.selectedIconPath" mode="widthFix"></image>
					</template>
					<template v-else>
						<image :src="item.iconPath" mode="widthFix"></image>
					</template>
				</view>
				<view v-if="active == i" :style="'color:'+render.selectedColor" class="title">
					{{item.text}}
				</view>
				<view v-else class="title">
					{{item.text}}
				</view>
			</view>
		</template>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0
			}
		},
		props: [
			'render'
		],
		methods: {
			setTab(i, item) {
				//console.log(i);
				this.active = i;

				// uni.redirectTo({
				// 	url: item.pagePath
				// })
			}
		}
	}
</script>

<style>
	.tabBar {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.tabBar .item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tabBar .item .icon-wrap {
		width: 50rpx;
		height: 50rpx;
	}

	.tabBar .item .icon-wrap image {
		width: 100%;
		height: 100%;
	}

	.tabBar .item .title {
		font-size: 24rpx;
	}
</style>
