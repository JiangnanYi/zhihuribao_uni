<template>
	<view class="uni-list">
		<view class="part2">
			<swiper class="banner-box" indicator-dots autoplay indicator-active-color="#169bd5" circular :interval="5000"
			:duration="300" indicator-color="rgba(0,0,0,.3)">
				<swiper-item v-for="(item, index) in imgList" :key="index" @tap="openinfo" :data-newsid="item.id">
					<image class="banner-image" :src="item.image" mode="aspectFill" lazy-load></image>
				</swiper-item>
			</swiper>
		</view>
		
		
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index" @tap="openinfo"
		:data-newsid="item.id">
			<view class="uni-media-list">
				<image class="uni-media-list-logo" :src="item.images"></image>
				<view class="uni-media-list-body">
					<view class="uni-media-list-text-top">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				imgList: []
			};
		},
		onLoad: function() {
			uni.request({
				url: 'https://news-at.zhihu.com/api/4/news/latest',
				method: 'GET',
				data: {},
				success: res => {
					this.list = res.data.stories;
					this.imgList = res.data.top_stories;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openinfo(e) {
				var newsid = e.currentTarget.dataset.newsid;

				uni.navigateTo({
					url: '../info/info?newsid=' + newsid
				});
			}
		},
	}
</script>

<style>
	.part2 {
		width: 100%;
		height: 360px;
		border-bottom: 20px solid #f9f9f9;
		overflow: hidden;
		position: relative;
	}

	.part2:after {
		content: " ";
		height: 20px;
		border-radius: 50%;
		background: #f9f9f9;
		position: absolute;
		bottom: -10px;
		left: -20px;
		right: -20px;
	}

	.banner-box {
		width: 100%;
		height: 100%;
	}

	.banner-image {
		width: 100%;
		height: 100%;
	}
</style>
