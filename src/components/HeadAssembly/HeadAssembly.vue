<template>
	<!-- 头部顶端搜索 -->
	<div class="head-top">
		<!-- <div class="sousuoBox">
			<input type="text" name="name" id="name" placeholder="输入商家名" />
			<i class="iconfont icon-sousuo"></i>
		</div> -->
		<slot name="sousuoBox"></slot>
		<!-- <div class="login">登录|注册</div> -->
		<div class="forCenter">
			{{title}}
		</div>
		<slot name="login"></slot>
	</div>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style lang="less">
	.head-top {
		width: 100%;
		height: 40px;
		background-color: #009474;
		display: flex;
		justify-content: space-between;
		// 更快实现效果，简洁
		// align-items: center;
		position: fixed;
		z-index: 25;
	}
		.sousuoBox {
			display: flex;
			align-items: center;
			height: 22px;
			margin-left: 14px;
			// 包裹输入框和搜索图标，实现“整体”
			border: 1px solid white;
			border-radius: 30px;
			background-color: white;
			// relative的基点是相对于父元素，下面两行效果同在.head-top中用align-items: center实现一个效果
			position: relative;
			top: 8px;
			input {
				border: none;
				outline: none;
				border-radius: 30px;
				margin-left: 4px;
			}
			i {
				margin-right: 4px;
			}
		}
		.forCenter {
			display: flex;
			align-items: center;
			margin: 0 auto;
			color: white;
			font-size: 19px;
		}
		.login {
			display: flex;
			align-items: center;
			margin-right: 14px;
			color: white;
		}
</style>
