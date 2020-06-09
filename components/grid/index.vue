<template>
	<!-- 栅格 -->
	<view :style="diyStyle" class="grid row text-center">
		<template v-for="(item,index) in data">
			<view :class="getCol()">
				<view class="icon">
					<view class="img-wrap">
						<image :src="item.image" mode="aspectFit"></image>
					</view>
				</view>
				<view class="title">{{item.name}}</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:[
			'gridNum',
			'diyStyle',
			'data'
		],
		methods:{
			getCol:function(){
				const num = Number(this.gridNum)
				switch(num){
					case 3:
					return "col-4"
					break
					case 4:
					return "col-3"
					break
					case 5:
					return "col-5"
					break
					default:
					console.log("未定义")
					break
				}
			}
		}
	}
</script>

<style>
	.grid .icon .img-wrap {
		width: 100rpx;
		height: 100rpx;
		line-height: 100rpx;
		margin: 0 auto;
	}
	
	.grid .title {
		font-size: 28rpx;
		font-weight: bold;
		color: #333333;
		margin-top: 20rpx;
	}
</style>
