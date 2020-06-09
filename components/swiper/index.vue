<template>
	<view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor"
		 :circular="circular" :autoplay="autoplay" :interval="interval" :duration="duration" :vertical="vertical">
			<template v-for="(sItem, sIndex) in data">
				<swiper-item :key="sIndex">
					<view class="swiper-item img-wrap">
						<view :style="{backgroundImage: 'url('+ sItem.image +')'}" class="swiper-img"></view>
					</view>
				</swiper-item>
			</template>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:[
			'indicatorDots',
			'indicatorColor',
			'indicatorActiveColor',
			'circular',
			'autoplay',
			'interval',
			'duration',
			'vertical',
			'data'
		],
		methods: {

		}
	}
</script>

<style>

</style>
