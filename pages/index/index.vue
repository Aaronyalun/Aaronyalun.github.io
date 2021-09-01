<template>
	<view class="content">
		<u-swiper :list="list" height=800></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image:'../../static/lp1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/lp2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: '../../static/lp3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					},
					{
						image: '../../static/lp4.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
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

<style lang="scss" scoped>
	.content {
		padding: 40rpx;
	}
</style>
