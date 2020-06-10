<template>
	
	<!-- 商品；列表 -->
	<view :style="initStyle" class="my-list">
		<view class="padded-content">
			<view class="flex justify-content-center title-wrap">
				<view class="title flex-1">
					热门推荐
				</view>
				<view class="more">
					<view class="text">
						查看更多
					</view>
					<view class="iconfont iconright"></view>
				</view>
			</view>

			<template>
				<view class="media">
					<view class="img-wrap">
						<image src="http://wechatapppro-1252524126.file.myqcloud.com/appe0MEs6qX8480/image/compress/414320k8pz1mkl0r5nh6vzd83.jpeg"
						 mode="widthFix" />
					</view>
					<view class="ml-3 text-wrap">
						<view>
							<view class="content-title ellipsis-1">
								保险达人3天特训营 第四期
							</view>
							<view class="content-desc ellipsis-1">
								学习周期：06月15日-06月20日
							</view>
						</view>

						<view class="price">
							<view class="origin">
								￥69.00
							</view>
							<view class="current">
								￥9.9
							</view>
						</view>
					</view>
				</view>
			</template>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				initStyle: ""
			}
		},
		props: [
			'config',
			'render'
		],
		mounted() {
			this.initStyle =
				`background:${this.config.background};
							  padding:${this.config.padding};
							  margin:${this.config.margin};`
		}
	}
</script>

<style>
	.my-list .title-wrap {
		margin-bottom: 30rpx;
	}

	.my-list .title-wrap .title {
		font-size: 36rpx;
		font-weight: 600;
		color: #000;
	}

	.my-list .title-wrap .more {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999;
		font-size: 28rpx;
	}

	.my-list .title-wrap .more .iconfont {
		font-size: 26rpx;
		line-height: 26rpx;
	}

	.my-list .media {
		display: flex;
	}

	.my-list .media .img-wrap {
		width: 240rpx;
	}

	.my-list .media .text-wrap {
		width: 0;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.my-list .media .text-wrap .content-title {
		color: #72717a;
		font-size: 30rpx;
		font-weight: bold;
	}

	.my-list .media .text-wrap .content-desc {
		font-size: 26rpx;
		color: #999;
	}

	.my-list .media .text-wrap .price {
		display: flex;
		justify-content: flex-end;
	}

	.my-list .media .text-wrap .price .origin {
		color: #999;
		font-size: 32rpx;
		text-decoration: line-through;
		margin-right: 20rpx;
		font-weight: 400;
	}

	.my-list .media .text-wrap .price .current {
		color: #000;
		font-size: 32rpx;
		margin-right: 20rpx;
		font-weight: bold;
	}
</style>
