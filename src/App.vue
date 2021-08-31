<template>
	<div>
		<!-- 显示路由组件 -->
		<router-view></router-view>
		<!-- 写FooterGuide标签 -->
		<FooterGuide></FooterGuide>
	</div>
</template>

<script type="text/javascript">
	// 引入底部导航栏
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'
	export default {
		// 用components属性把FooterGuide映射成标签
		components: {
			FooterGuide
		}
	}
</script>

<style lang="less">

</style>
