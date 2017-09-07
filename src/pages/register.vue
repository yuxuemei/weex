<template>
	<div class="login-bg">
	    <image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/bg.png" class="bg-img" style="width: 750px;height: 1218px;"></image>
		<div class="tag">
			<text class="tag-text">手机号快捷注册</text>
		</div>
		<div>
			<div class="clumn-login row" style="margin-bottom: 0;border-bottom-width:1px; border-color:#3e331b;border-style: solid;">
                <text class="clumn-tit">* 手机号码：</text>
                <input type="text" class="input-login" v-model="mobile" placeholder="请输入你的手机号码" />
            </div>
            <div class="clumn-login row" style="margin-top: 0;">
                <text class="clumn-tit">* 密码：</text>
                <input type="password" class="input-login" v-model="password" placeholder="请输入你的密码" />
            </div>
            <div class="clumn-login row" style="margin-top: 0;">
                <text class="clumn-tit">* 验证码：</text>
                <input type="password" class="input-login" v-model="code" placeholder="请输入你的验证码" />
                <image class="get-code-btn" v-if="!isTimeOut" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/get-code-btn.png" @click="sendCode"></image>
                <image class="get-code-btn" v-if="isTimeOut" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/code-time-bg.png"></image>
                <text v-if="isTimeOut" class="time-num">{{timenum}}s</text>
            </div>
            <div class="center">
            	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/register-submit-btn.png" style="width: 633px;height: 75px;margin-left:59px;margin-top:20px;" @click="register"></image>
            </div>
		</div>
	</div>
</template>
<script>
	const common = require('./common');
	export default {
	    data: {
	        mobile:'15928519944',
	        password:'123456',
	        code:'',
	        timenum:60,
            timefun:'',
            isTimeOut:false
	    },
	    methods: {
	        register:function(){
	        	var param = {
	        		mobile:this.mobile,
		        	password:this.password,
		        	code:this.code
	        	}
	       	    common.post({
		       	   	url:"api/user/register",
		       	   	param:JSON.stringify(param),
		       	   	callback:respose=>{
                        common.jump("login.js");
	                }
	       	   })
	        },
            timeOut(){
                this.timenum -= 1;
                if (this.timenum <= 0) {
                    this.isTimeOut =false;
                    clearInterval(this.timefun);
                    this.timefun = '';
                    this.timenum = 60;
                    return;
                }
            },
	        //发送验证码
	        sendCode(){
	        	var param = {
	        		mobile: this.mobile,
                    type: 1
	        	}
                common.post({
                	url:"api/sendcode",
                	param:JSON.stringify(param),
                	callback:respose=>{
                        this.isTimeOut = true;
                        var _this = this;
                        this.timefun = setInterval(function(){
                            _this.timeOut();
                        }, 1000);
	                }
                })
	        }
	    }
    }
</script>
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
		position: relative;
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
	.get-code-btn{
        width: 144px;
        height: 39px;
        position: absolute;
        right: 40px;
        top:25px;
	}
	.time-num{
		width: 144px;
	    height: 39px;
	    position: absolute;
	    right: 40px;
	    top:33px;
	    text-align: center;
	    font-size:22px;
	    font-weight: bold;
	    color: #000000;
	    text-shadow: 0 0 1px #d2c184;
	}
</style>