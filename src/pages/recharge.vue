<template>
	<div class="login-bg">
	    <image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/bg.png" class="bg-img" style="width: 750px;height: 1218px;"></image>
		<div>
            <div class="clumn-login row">
                <text class="clumn-tit">* 我的队长：</text>
                <input type="password" class="input-login" placeholder="输入邀请码" />
                <image class="recharge-sure-btn" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/recharge-sure-btn.png"></image>
            </div>
            <div class="clumn-select">
                <text class="clumn-tit">* 已选套餐：</text>
                <div style="margin-left: 17px;margin-right: 30px;margin-top: 20px;" class="row">
                	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/meal1.png" class="select-meal-img"></image>
                	<div style="margin-left:20px;width:400px;">
                		<text class="meal-detail">+附赠：10钻石</text>
	                	<text class="meal-detail">+附赠青铜战队成立资格卷</text>
	                    <text class="meal-detail">+附赠最高可享1.9万元扶持金资格</text>
	                	<text class="meal-detail">+附赠：您的邀请者10枚荣誉勋章</text>
	                	<div class="row" style="justify-content:space-between;">
		                	<div>
		                		<text class="meal-detail">价值：</text>
		                	</div>
	                		<div class="row">
	                			<text class="meal-detail">12元</text><text class="meal-price">￥10</text>
	                		</div>
	                	</div>
                	</div>
                </div>
            </div>
            <div class="center">
            	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/recharge-submit-btn.png" style="width: 633px;height: 75px;margin-left:59px;margin-top:60px;"></image>
            </div>
		</div>
	</div>
</template>
<style>
    .row{
	    flex-direction: row;
	}
	.center{
		text-align: center;
		justify-content: center;/*水平居中*/
	}
	.login-bg{
		width: 750px;
		height: 1218px;
	}
	.bg-img{
		position: absolute;
		top: 0;
		left: 0;
	}
	.clumn-login{
		margin-top: 38px;
		margin-bottom: 38px;
		height: 86px;
		line-height: 86px;
	    background-color: rgba(85,67,31,.15);
	    padding-left: 28px;
		padding-right: 28px;
		position: relative;
	}
	.clumn-select{
		height: 266px;
		background-color: rgba(85,67,31,.15);
	    padding-left: 28px;
		padding-right: 28px;
	}
	.clumn-tit{
		font-size: 26px;
        color: #e7dcbf;
        width: 170px;
        text-align: left;
        margin-top: 25px!important;
	}
	.input-login{
		height: 46px;
	    line-height: 46px;
	    border: none;
	    background: transparent;
	    margin-top:20px;
	    margin-bottom: 20px;
	    width: 500px;
	    font-size: 24px;
	    color: #e7dcbf;
	}
	.recharge-sure-btn{
        width: 124px;
        height: 33px;
        position: absolute;
        right: 40px;
        top:25px;
	}
	.select-meal-img{
		width: 226px;
	    height: 110px;
	}
	.meal-detail{
		font-size: 20px;
        color: #515151;
        line-height: 30px;
	}
	.meal-price{
		font-size:30px;
	    color: #dd2727;
	}
</style>