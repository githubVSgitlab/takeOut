<template>
	<div class="personal">
		<!-- <div class="head-top">
			<div>我的</div>
		</div> -->
		<HeadAssembly title="我的"></HeadAssembly>
		<!-- 登录/注册区域 -->
		<div class="loginAndRegArea">
			<div class="yonghuImg">
				<img src="./imgs/yonghu.png" alt="">
			</div>
			<div class="loginAndRegArea-info">
				<div class="loginAndReg">登录/注册</div>
				<div class="mobile-num">
					<span class="phone-icon"><i class="iconfont icon-shouji"></i></span>
					<span class="mobile-num-tips">暂无绑定手机号</span>
				</div>
			</div>
			<div class="arrowJump"><i class="iconfont icon-arrow-right-copy-copy"></i></div>
		</div>
		<!-- 余额、优惠、积分 -->
		<div class="balanceArea">
			<div class="balance my-balance">
				<div class="remaining-amount my-balance-money">
					<span class="num balance-num">0.00</span>
					<span class="quantifier">元</span>
				</div>
				<div class="text my-balance-text">
					<span>我的余额</span>
				</div>
			</div>
			
			<div class="balance my-discount">
				<div class="remaining-amount my-discount-money">
					<span class="num discount-num">0</span>
					<span class="quantifier">个</span>
				</div>
				<div class="text my-discount-text">
					<span>我的优惠</span>
				</div>
			</div>
			
			<div class="balance my-integral">
				<div class="remaining-amount my-integral-money">
					<span class="num integral-num">0</span>
					<span class="quantifier">分</span>
				</div>
				<div class="text my-integral-text">
					<span>我的积分</span>
				</div>
			</div>
		</div>
		<!-- 我的信息 -->
		<div class="myInfo">
			<div class="content my-order">
				<span class="icon order-icon"><i class="iconfont icon-dingdan1"></i></span>
				<span class="text my-order-text">我的订单</span>
				<span class="arrow"><i class="iconfont icon-arrow-right-copy-copy"></i></span>
			</div>
			<div class="content integral-mall">
				<span class="icon integral-icon"><i class="iconfont icon-jifen"></i></span>
				<span class="text integral-mall-text">积分商城</span>
				<span class="arrow"><i class="iconfont icon-arrow-right-copy-copy"></i></span>
			</div>
			<div class="content zhunda-member">
				<span class="icon member-icon"><i class="iconfont icon-jiangpai"></i></span>
				<span class="text zhunda-member-text">准达外卖会员</span>
				<span class="arrow"><i class="iconfont icon-arrow-right-copy-copy"></i></span>
			</div>
			<div class="content service-centre">
				<span class="icon service-icon"><i class="iconfont icon-fuwuerji"></i></span>
				<span class="text service-centre-text">服务中心</span>
				<span class="arrow"><i class="iconfont icon-arrow-right-copy-copy"></i></span>
			</div>
		</div>
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
	.personal {
		.head-top {
			position: fixed;
			top: 0px;
		}
		.loginAndRegArea {
			margin-top: 41px;
			background-color: #009474;
			display: flex;
			align-items: center;
			.yonghuImg {
				width: 100px;
				height: 100px;
				display: flex;
				align-items: center;
				justify-content: center;
				img{
					width: 60px;
					height: 60px;
				}
			}
			.loginAndRegArea-info {
				color: #fff;
				.loginAndReg {
					font-size: 18px;
					margin-bottom: 8px;
				}
				.mobile-num {
					.phone-icon .icon-shouji{
						font-size: 16px;
					}
					.mobile-num-tips{
						font-size: 13px;
					}
				}
			}
			.arrowJump {
				// 这是"箭头"的父元素,为了给`position: absolute;`起作用所以定义了改父元素
				width: 20px;
				height: 20px;
				color: white;
				.icon-arrow-right-copy-copy {
					width: 20px;
					height: 20px;
					font-size: 20px;
					// 弹性布局,让箭头垂直居中
					display: flex;
					align-items: center;
					justify-content: center;
					// 定位，一定要与top、right、bottom、left连起来用
					position: absolute;
					right: 0px;
				}
			}
		}
		.balanceArea {
			height: 100px;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.balance {
				width: 30%;
				height: 100px;
				.remaining-amount {
					display: flex;
					justify-content: center;
					align-items: flex-end;
					width: 100%;
					height: 60%;
					.num {
						font-size: 42px;
						color: #f99e15;
						font-weight: 600;
					}
					.quantifier {
						font-size: 18px;
					}
				}
				.text {
					width: 100%;
					height: 40%;
					display: flex;
					justify-content: center;
					align-items: flex-start;
					span {
						margin-top: 5px;
						font-size: 14px;
					}
				}
			}
			.my-discount {
				.my-discount-money {
					.discount-num {
						color: #f86743;
					}
				}
			}
			.my-integral {
				.my-integral-money {
					.integral-num {
						color: #8cc449;
					}
				}
			}
		}
		.myInfo {
			.content {
				height: 60px;
				display: flex;
				align-items: center;
				border-top: 1px solid #dcdcdc;
				.icon {
					width: 15%;
					display: flex;
					justify-content: center;
					color: rgb(134,194,174);
					.iconfont {
						font-size: 18px;
					}
				}
				.text {
					width: 85%;
					font-size: 18px;
					margin-left: -12px;
				}
				.arrow {
					.iconfont {
						font-size: 18px;
						color: rgb(210,218,221);
					}
				}
			}
			.integral-mall {
				.icon-jifen {
					color: rgb(255,95,65);
				}
			}
		}
		.zhunda-member {
			.icon-jiangpai {
				color: rgb(233,177,95);
			}
		}
		.service-centre {
			border-bottom: 1px solid #dcdcdc;
			.icon-fuwuerji {
				color: rgb(0,166,109);
			}
		}
	}
	
		
</style>
