import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入底部导航栏中的四个页面
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal.vue'

// 引入font字体图标
import '../common/font/iconfont.css'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		component: Home
	},
	{
		path: '/search',
		component: Search
	},
	{
		path: '/order',
		component: Order
	},
	{
		path: '/personal',
		component: Personal
	},
	{
		// 路径为空时重定向到home页面
		path: '/',
		redirect: '/home'
	}
]

const router = new VueRouter({
  routes
})

export default router
