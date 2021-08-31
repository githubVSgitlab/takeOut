<template>
	<section class="head">
		<!-- 头部顶端搜索 -->
<!-- 		<div class="head-top">
			<div class="sousuoBox">
				<input type="text" name="name" id="name" placeholder="输入商家名" />
				<i class="iconfont icon-sousuo"></i>
			</div>
			<div class="login">登录|注册</div>
		</div> -->
		<HeadAssembly>
			<div class="sousuoBox" slot="sousuoBox">
				<input type="text" name="name" id="name" placeholder="输入商家名" />
				<i class="iconfont icon-sousuo"></i>
			</div>
			<div class="login" slot="login">登录|注册</div>
		</HeadAssembly>
		<!-- 头部轮播 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div>
						<img :src="imgUrl1">	
						<span>快餐</span>
					</div>
					<div>
						<img :src="imgUrl2">
						<span>炸鸡</span>
					</div>
					<div>
						<img :src="imgUrl3">
						<span>火锅</span>
					</div>
					<div>
						<img :src="imgUrl4">
						<span>烤肉</span>
					</div>
					<div>
						<img :src="imgUrl5">
						<span>海鲜</span>
					</div>
					<div>
						<img :src="imgUrl6">
						<span>串串</span>
					</div>
					<div>
						<img :src="imgUrl7">
						<span>甜点</span>
					</div>
					<div>
						<img :src="imgUrl8">
						<span>饮品</span>
					</div>
				</div>
				<div class="swiper-slide">
					<div>
						<img :src="imgUrl9">
						<span>烧烤</span>
					</div>
					<div>
						<img :src="imgUrl10">
						<span>早餐</span>
					</div>
					<div>
						<img :src="imgUrl11">
						<span>小龙虾</span>
					</div>
					<div>
						<img :src="imgUrl12">
						<span>柠檬鱼</span>
					</div>
					<div>
						<img :src="imgUrl13">
						<span>水果</span>
					</div>
					<div>
						<img :src="imgUrl14">
						<span>水果沙拉</span>
					</div>
					<div>
						<img :src="imgUrl15">
						<span>超市</span>
					</div>
					<div>
						<img :src="imgUrl16">
						<span>石锅拌饭</span>
					</div>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>

		<!-- 附近商家 -->
		<div class="nearbyMerchants">
			<div class="nearbyMerchants-title">
				<img src="../../common/font/caidan.png" >
				<span>&nbsp;附近商家</span>
			</div>
			
			<div class="nearbyMerchants-shopList">
				<ul>
					<li>
						<div class="shop-img">
							<img src="./imgs/shop/bianlidian.webp" alt="">
						</div>
						<div class="shop-info">
							<div class="shop-info-title">
								<span>品牌</span>
								<a href="">便利店</a>
							</div>
							<div class="shop-info-score">
								<!-- 打星 -->
								<img src="./imgs/stars/3.5stars.png" alt="3.5星">
								<span>3.5</span>
							</div>
							<div class="shop-info-delivery">
								<span>￥20起送&nbsp;/&nbsp;</span>
								<span>配送费￥5</span>
							</div>
						</div>
						<div class="zhunda-logo">
							<img src="../../common/font/waimai.png" >
							<span>准达外卖</span>
						</div>
					</li>
					<li>
						<div class="shop-img">
							<img src="./imgs/shop/xileda.webp" alt="">
						</div>
						<div class="shop-info">
							<div class="shop-info-title">
								<span>品牌</span>
								<a href="">喜乐达</a>
							</div>
							<div class="shop-info-score">
								<!-- 打星 -->
								<img src="./imgs/stars/4stars.png">
								<span>4</span>
							</div>
							<div class="shop-info-delivery">
								<span>￥20起送&nbsp;/&nbsp;</span>
								<span>配送费￥5</span>
							</div>
						</div>
						<div class="zhunda-logo">
							<img src="../../common/font/waimai.png" >
							<span>准达外卖</span>
						</div>
					</li>
					<li>
						<div class="shop-img">
							<img src="./imgs/shop/yipinyouguo.webp" alt="">
						</div>
						<div class="shop-info">
							<div class="shop-info-title">
								<span>品牌</span>
								<a href="">壹品优果</a>
							</div>
							<div class="shop-info-score">
								<!-- 打星 -->
								<img src="./imgs/stars/4stars.png" >
								<span>4</span>
							</div>
							<div class="shop-info-delivery">
								<span>￥20起送&nbsp;/&nbsp;</span>
								<span>配送费￥5</span>
							</div>
						</div>
						<div class="zhunda-logo">
							<img src="../../common/font/waimai.png" >
							<span>准达外卖</span>
						</div>
					</li>
					<li>
						<div class="shop-img">
							<img src="./imgs/shop/zhachihuo.webp" alt="">
						</div>
						<div class="shop-info">
							<div class="shop-info-title">
								<span>品牌</span>
								<a href="">宅吃货</a>
							</div>
							<div class="shop-info-score">
								<!-- 打星 -->
								<img src="./imgs/stars/3.5stars.png" >
								<span>3.5</span>
							</div>
							<div class="shop-info-delivery">
								<span>￥20起送&nbsp;/&nbsp;</span>
								<span>配送费￥5</span>
							</div>
						</div>
						<div class="zhunda-logo">
							<img src="../../common/font/waimai.png" >
							<span>准达外卖</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
	import HeadAssembly from '../../components/HeadAssembly/HeadAssembly.vue'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	export default {
		mounted() {
			new Swiper('.swiper-container', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				}
			})
		},
		data() {
			return {
				imgUrl1:require('./imgs/nav/fastFood.jpg'),
				imgUrl2:require('./imgs/nav/friedChicken.webp'),
				imgUrl3:require('./imgs/nav/hotPut.webp'),
				imgUrl4:require('./imgs/nav/roastMeat.webp'),
				imgUrl5:require('./imgs/nav/seafood.webp'),
				imgUrl6:require('./imgs/nav/stringStringSweet.webp'),
				imgUrl7:require('./imgs/nav/sweets.webp'),
				imgUrl8:require('./imgs/nav/drink.webp'),
				imgUrl9:require('./imgs/nav/barbecue.webp'),
				imgUrl10:require('./imgs/nav/breakfast.webp'),
				imgUrl11:require('./imgs/nav/crayfish.webp'),
				imgUrl12:require('./imgs/nav/fish.webp'),
				imgUrl13:require('./imgs/nav/fruits.webp'),
				imgUrl14:require('./imgs/nav/fruitSalad.webp'),
				imgUrl15:require('./imgs/nav/supermarket.webp'),
				imgUrl16:require('./imgs/nav/bibimbap.webp')
			}
		},
		components: {
			HeadAssembly
		}
	}
</script>

<style lang="less">
	// 头部顶端搜索
	.head {
		position: absolute;
	}

		// 轮播图
		.swiper-container {
			margin-top: 40px;
			height: 230px;
			.swiper-wrapper {
				width: 375px;
				height: 200px;
				.swiper-slide {
					div {
						// width: 100px;
						// height: 100px;
						// background-color: red;
						display: inline-block;
						margin: 5px;
						// display: flex;
						// flex-wrap: wrap;
						img {
							width: 83px;
							height: 85px;
						}
						span {
							width: 74px;
							height: 14px;
							
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}
		}
						
	// 附近商家
	.nearbyMerchants {
		width: 100%;
		position: relative;
		z-index: 2;
		background-color: #ffffff;
		.nearbyMerchants-title {
			height: 30px;
				position: relative;
				z-index: 3;
			margin-left: 5px;
			img {
				width: 22px;
				height: 22px;
				float: left;
			}
			span {
				color:rgb(112,112,112);
				height: 22px;
				font-size: 15px;
				display: flex;
				align-items: center;
			}
		}
			
		.nearbyMerchants-shopList ul {
			margin-bottom: 50px;
			li {
				height: 100px;
				margin: 15px 5px;
					.shop-img img{
						width: 28%;
						height: 100px;
						float: left;
					}
					.shop-info {
						width: 47%;
						height: 100px;
						float: left;
						div {
							height: 30px;
							margin: 2px;
						}
						.shop-info-title {
							span {
								background-color: yellow;
								float: left;
							}
							a {
								text-decoration: none;
								color: #000000;
								width: 100px;
								display: block;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								font-weight: 600;
								float: left;
							}
						}
						.shop-info-score {
							span {
								margin-left: 4px;
								color: #ffac2d;
							}
						}
						.shop-info-delivery {
						}
					}
					
					.zhunda-logo {
						float: left;
						width: 25%;
						height: 100px;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;
					}
					
					.zhunda-logo  img {
						width: 38px;
						height: 30px;
						margin-bottom: -22px;
					}
					
					.zhunda-logo span {
						color: #009474;
						display: block;
						width: 110px;
						height: 30px;
						
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: -22px;
					}
			} 
		}
	}
</style>
