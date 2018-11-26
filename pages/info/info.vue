<template>
	<view>
		<rich-text class="richText" :nodes="title"></rich-text>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				title:'',
				tcss:''
			}
		},
		onLoad:function(e){
			console.log(e);
			uni.request({
				url: 'http://news-at.zhihu.com/api/4/news/' + e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					this.title = res.data.body;
					this.tcss = res.data.css;
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>

</style>
