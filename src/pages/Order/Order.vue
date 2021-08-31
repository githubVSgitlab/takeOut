<template>
	<div class="order">
		<!-- <div class="head-top">
			<div>搜索</div>
		</div> -->
		<HeadAssembly title="订单列表"></HeadAssembly>
		<div class="order-content">
			<img :src="imgUrl1" alt="外卖订单">
		</div>
		<div class="loginArea">
			<div class="login-tips">登录后查看外卖订单</div>
			<button class="login-but">立即登录</button>
		</div>
	</div>
</template>

<script>
	import HeadAssembly from '../../components/HeadAssembly/HeadAssembly.vue'
	export default {
		data() {
			return {
				imgUrl1:require('./imgs/waimaixiaoge.png')
			}
		},
		components: {
			HeadAssembly
		}
		
	}
</script>

<style lang="less">
	.order{
		.head-top {
			position: fixed;
			top: 0px;
		}
		.order-content {
			display: flex;
			justify-content: center;
			position: relative;
			top: 100px;
			img {
				width: 350px;
				height: 200px;
			}
		}
		.loginArea {
			position: relative;
			top: 100px;
			.login-tips {
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 5px 0px 10px;
			}
			.login-but {
				display: block;
				margin: 0 auto;
				background-color: #009474;
				color: #FFFFFF;
				width: 100px;
				height: 40px;
				border: none;
				border-radius: 5px;
			}
		}
	}
</style>