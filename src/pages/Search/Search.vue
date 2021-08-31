<template>
	<div class="search">
		<!-- <div class="head-top">
			<div>搜索</div>
		</div> -->
		<HeadAssembly title="搜索"></HeadAssembly>
		<form action="#" class="search-form">
			<input class="input-search search-sousuoBox" type="text" placeholder="输入商家或美食名称">
			<input class="input-search search-submit" type="button" value="提交">
		</form>
	</div>
</template>

<script>
	import HeadAssembly from '../../components/HeadAssembly/HeadAssembly.vue'
	export default {
		components: {
			HeadAssembly
		}
	}
</script>

<style lang="less">
	.search {
		.head-top {
			// position要与top right bottom left结合用
			// 先调整页面顶端距离
			top: 0px;
			// 再固定头部
			position: fixed;
		}
		.search-form {
			width: 100%;
			height: 40px;
			margin-top: 45px;
				// background-color: pink;
			display: flex;
			justify-content: center;
			align-items: center;
			.input-search{
				border-radius: 0px;
				height: 30px;
			}
			.search-sousuoBox {
				width: 68%;
				background-color: #f2f2f2;
				border: none;
				outline: none;
			}
			.search-submit {
				width: 25%;
				background-color: #009474;
				color: #ffffff;
				margin-left: 5px;
				border: none;
				outline: none;
			}
		}
	}
</style>
