<template>
	<div class="login-bg">
	    <image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/bg.png" class="bg-img" style="width: 750px;height: 1218px;"></image>
		<div class="tag">
			<text class="tag-text">手机号快捷登录</text>
		</div>
		<div>
			<div class="clumn-login row">
                <text class="clumn-tit">* 手机号码：</text>
                <input type="text" class="input-login" placeholder="请输入你的手机号码" />
            </div>
            <div class="clumn-login row">
                <text class="clumn-tit">* 密码：</text>
                <input type="password" class="input-login" placeholder="请输入你的密码" />
            </div>
            <div class="center">
            	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/login-submit-btn.png" style="width: 633px;height: 75px;margin-left:59px;margin-top:20px;"></image>
            </div>
            <div class="center">
            	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/register-submit-btn.png" style="width: 633px;height: 75px;margin-left:59px;"></image> 
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
	.tag{
	    text-align: left;
	    margin-left: 28px;
	    margin-top: 38px;
	}
	.tag-text{
		font-size: 25px;
	    color: #604e2b;
	}
	.clumn-login{
		margin-top: 22px;
		margin-bottom: 38px;
		height: 86px;
		line-height: 86px;
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
</style>