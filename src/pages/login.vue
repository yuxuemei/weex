<template>
	<div class="login-bg">
	    <image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/bg.png" class="bg-img" style="width: 750px;height: 1218px;"></image>
		<div class="tag">
			<text class="tag-text">手机号快捷登录</text>
		</div>
		<div>
			<div class="clumn-login row">
                <text class="clumn-tit">* 手机号码：</text>
                <input type="text" class="input-login" v-model="mobile" placeholder="请输入你的手机号码" />
            </div>
            <div class="clumn-login row">
                <text class="clumn-tit">* 密码：</text>
                <input type="password" class="input-login"  v-model="password" placeholder="请输入你的密码" />
            </div>
            <div class="center">
            	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/login-submit-btn.png" class="btn-img" style="margin-top:20px;margin-left:59px;"  @click="login"></image>
            </div>
            <div class="center">
            	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/register-submit-btn.png" class="btn-img" style="margin-top:30px;margin-left:59px;" @click="enterRegister"></image> 
            </div>
		</div>
	</div>
</template>
<script>
    const common = require('./common');
	export default {
	    data: {
	        mobile:'15928519944',
	        password:'123456'
	    },
	    mounted:function(){
	     
	    },
	    methods: {
	        login:function(){
	        	var param = {
	        		mobile:this.mobile,
		        	password:this.password
	        	}
	       	    common.post({
		       	   	url:"api/user/login",
		       	   	param:JSON.stringify(param),
		       	   	callback:respose=>{
		       	   		common.storage.setItem("token",respose.data.data.auth_token);
		       	   		common.modal.toast({ message: "登录成功！"})
                        common.token = respose.data.data.auth_token;
                        this.getHonorStatus();
	                }
	       	   })
	        },
	        //查询用户在荣誉殿堂的状态(是否加入)
	        getHonorStatus(){
                common.get({
                	url:"api/honor/info",
                	callback:respose=>{
                		//跳转到用户相应状态的页面中
                        if(respose.data.data.hasIn == 0){
                            common.jump("index.js");
                        }else{
                        	common.jump("my.js");
                        }
	                }
                })
	        },
	        enterRegister(){
	        	common.jump("register.js");
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
	.btn-img{
		width: 633px;
		height: 75px;
		cursor: pointer;
	}
</style>