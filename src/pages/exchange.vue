<template>
	<div class="login-bg">
	    <image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/bg.png" class="bg-img" style="width: 750px;height: 1218px;"></image>
		<div>
            <div class="clumn-login row">
                <text class="clumn-tit">* 余额：</text>
                <text class="clumn-tit">10枚</text>
                <image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/medal.png" style="width: 44px;height: 42px;margin-top:24px;margin-left:5px;margin-right:5px;"></image>
                <text class="price">(价值2.5元)</text>
            </div>
            <div class="clumn-login row">
                <input type="password" class="input-login" style="width:650px;" placeholder="请输入你要兑换的勋章数量(最低兑换金额为10元)" />
            </div>
            <div class="center">
            	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/exchange-submit-btn.png" style="width: 633px;height: 75px;margin-left:59px;margin-top:60px;" @click="exchangeSubmit"></image>
            </div>
		</div>
	</div>
</template>
<script>
	const common = require('./common');
	export default {
	    data: {
	        money:'',
            isBind:false,
            mealSum:0
	    },
	    mounted:function(){
	        this.getUserInfo();
	    },
	    methods: {
	        getUserInfo(){
                common.get({
		       	   	url:"api/user/userinfo",
		       	   	callback:respose=>{
		       	   		if(respose.data.data.pay == ""){
                            common.modal.toast({ message: "您还未绑定支付宝账号，请绑定,为您跳转到绑定页面！"})
                        }else{
                            this.isBind = true;
                        }
	                }
	       	    })
            },
			exchangeSubmit(){
				var param = {
	        		money:this.money
	        	};
				common.post({
		       	   	url:"api/honor/makemoney",
		       	   	param:JSON.stringify(param),
		       	   	callback:respose=>{
		       	   		if(respose.data.data.pay == ""){
                            common.modal.toast({ message: "提现成功！"})
                        }else{
                            this.isBind = true;
                        }
	                }
	       	    })
            }
	    }
    }
</script>
<style>
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	    color: #604e2b;
	}

	::-moz-placeholder { /* Mozilla Firefox 19+ */
	    color: #604e2b;
	}

	input:-ms-input-placeholder{
	    color: #604e2b;
	}

	input::-webkit-input-placeholder{
	    color: #604e2b;
	}
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
		margin-top: 30px;
		margin-bottom: 20px;
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
	    color: #604e2b;
	}
	.price{
		font-size: 18px;
        color: #515151;
        margin-top: 32px!important;
	}
</style>