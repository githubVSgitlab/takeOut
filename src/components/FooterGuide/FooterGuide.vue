<template>
	<div class="bottomNav">
		<a class="home" :class="{changeColor: '/home'===$route.path}" @click="changeColor(0)">
			<span class="zhuye-icon">
				<i class="iconfont icon-zhuye"></i>
			</span>
			<span>主页</span>
		</a>
		<a class="search" :class="{changeColor: '/search'===$route.path}" @click="changeColor(1)">
			<span class="sousuo-icon">
				<i class="iconfont icon-sousuo"></i>
			</span>
			<span>搜索</span>
		</a>
		<a class="order" :class="{changeColor: '/order'===$route.path}" @click="changeColor(2)">
			<span class="dingdan-icon">
				<i class="iconfont icon-dingdan"></i>
			</span>
			<span>订单</span>
		</a>
		<a class="personal" :class="{changeColor: '/personal'===$route.path}" @click="changeColor(3)">
			<span class="wode-icon">
				<i class="iconfont icon-tubiaolunkuo-"></i>
			</span>
			<span>我的</span>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				// changed:''
			}
		},
		methods: {
			changeColor(index){
				// if(index == this.changed) {
				// 	return;
				// }
				// this.changed=index;
				
				if(index == 0) {
					// this.$route.path = '/home'
					this.$router.push({
						path:'/home'
					})
				}
				if(index == 1) {
					// this.$route.path = '/search'
					this.$router.push({
						path:'/search'
					})
				}
				if(index == 2) {
					// this.$route.path = '/search'
					this.$router.push({
						path:'/order'
					})
				}
				if(index == 3) {
					this.$router.push({
						path:'/personal'
					})
				}
			}
		},
	}
</script>

<style lang="less">
	@import url("../../common/css/reset.css");
	.bottomNav {
		// background-color: blue;
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #C0C0C0;
		overflow: hidden;
		
		z-index: 50;
		background-color: rgb(255,255,255);
	}
		a {
			// background-color: red;
			float: left;
			width: 25%;
			height: 100%;
			box-sizing: border-box;
			background-clip: content-box;
			
			/* 弹性布局 */
			display: flex;
			/* 横向居中 */
			align-items: center;
			/* 垂直居中 */
			justify-content: center;
			/* 使之纵向排列 */
			flex-direction: column;
			
			// color: red;
		}
			
			.changeColor{
				color: #009474;
			}
			// 添加字体放大样式
			// .unChange{
			// 	span{
			// 		font-size: 18px;
			// 	}
			// }
				span {
					margin-top: 3px;
					font-size: 10px;
				}
				span .iconfont {
					// background-color: aqua;
					font-size: 25px;
				}
</style>
