<template>
	<my-parse/>
</template>

<script>
	
	import myParse from '@/components/myParse.vue'
	
	export default {
		components: {myParse},
		data() {
			return {
				render:[
					{
						"type":"swiper",
						"data":[]
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
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 40rpx;
		color: #2d3230;
		font-weight: 600;
	}
</style>
