<template>
	<scroller>
		<div class="login-bg">
		    <image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/my-bg.jpg" class="bg-img absolute" style="width: 750px;height: 1218px;"></image>
		    <div  class="my-text relative">
		    	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/home-text.png" style="width: 750px;height: 213px;"></image>
		    	<text class="my-money center absolute">￥1200</text>
		    	<text class="person-num absolute">500</text>
		    </div>
		    <div class="exchange relative row">
		    	<image class="exchange-bg absolute" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/exchange-box.png"></image>
		    	<image src="http://oslg9bt6h.bkt.clouddn.com/44e17a74778747229c2a2e3012482ea4" class="my-head"></image>
		    	<text class="my-name">于晓</text>
		    	<text class="my-honor">我的荣誉勋章：</text>
		    	<image class="my-medal" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/medal.png"></image>
		    	<text class="my-medal-number">× 0</text>
		    	<image class="exchange-btn" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/exchange-btn.png"></image>
		    </div>
		    <div class="box" style="height:310px;">
		    	<image class="honor-title-img" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/honor-title1.png"></image>
		    	<div class="relative">
		    		<image class="honor-box-bg absolute" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/honor-box.png"></image>
		    		<div style="height:225px;margin-top:60px;padding-left: 30px;padding-top: 30px;padding-right: 30px;padding-bottom: 35px;overflow: auto;">
		    			<ul>
		    				<li class="row" style="height:32px;width:574px;" v-for="(tag,index) in tagList" :key="index">
		    					<text class="honor-title" v-text="tag.title"></text>
		    					<text class="honor-text" v-text="tag.time"></text>
		    				</li>
		    			</ul>	
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<image class="honor-title-img" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/honor-title2.png"></image>
		    	<div class="relative" style="margin-top:30px;" v-for="(honor_item,index) in myHonorList" :key="index">
		    		<image class="team-box-bg absolute" v-if="honor_item.honor_id == 1" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/gold-box-bg.png"></image>
		    		<image class="team-box-bg absolute" v-if="honor_item.honor_id == 2" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/silver-box-bg.png"></image>
		    		<image class="team-box-bg absolute" v-if="honor_item.honor_id == 3" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/copper-box-bg.png"></image>
		    		<div class="team_desc">
		    			<text class="team_desc_text center">奖励发放通过奖励兑换，输入勋章数进行奖励兑换申请；奖励每周进行发放.</text>
		    		</div>
		    		<div class="row team_detail relative">
		    			<div class="team_item">
		    			    <div class="row">
			    			    <text class="team-text">我的战队成员：</text>
			    			    <text class="team-text-number" v-text="honor_item.total_people"></text>
			    			    <text class="team-text">人</text>
		    			    </div>
		    				<image class="opera-img absolute" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/copy-btn.png"></image>
		    			</div>
		    			<div class="team_item">
		    				<text class="team-text">我的荣誉勋章：{{honor_item.total_medal}}个</text>
		    				<image class="meal-big absolute" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/medal-big.png"></image>
		    				<image class="opera-img absolute" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/qrcode-btn.png"></image>
		    			</div>
		    		</div>
		    		<div class="row center" style="margin-top:100px;">
		    			<text class="code_text center">我的邀请码：</text>
		    			<text class="code_text_value center" v-text="honor_item.formcode"></text>
		    		</div>
		    	</div>
		    </div>
		    <div class="center" style="margin-left:58px;margin-top:70px;margin-bottom:30px;">
		    	<image class="recharge-btn" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/recharge-btn.png"></image>
		    </div>
		</div>
	</scroller>
</template>
<script>
    require('./clipboard.min.js')
    const common = require('./common');
	export default{
		data:function(){
			return{
				user:{},
				honor:{},
				myHonorList:[],
				tagList:[],
				my:{},
				mealSum:0
			}
		},
		mounted:function(){
			this.getInfo();
			this.getTag();
			/*var clipboard = new Clipboard('.copy0');
            var _this =this;
            clipboard.on('success', function(e) {
                _this.$store.state.isShow = true;
                _this.$store.state.comfirmMessage = "复制成功";
            });*/
		},
		methods:{
			enterExchange(){
				localStorage.mealSum = this.mealSum;
                this.$router.push("/withdraw");
			},
			getInfo(){
				common.get({
                	url:"api/honor/info",
                	callback:respose=>{
                        this.honor = respose.data.data; 
                        this.myHonorList = respose.data.data.honor;
                        for (var j = 0; j < this.myHonorList.length; j++) {
                            this.mealSum+=this.myHonorList[j].total_medal;
                        }
                        this.my = respose.data.data.my;
	                }
                })
            },
            getTag(){
            	common.get({
                	url:"api/honor/tags",
                	callback:respose=>{
                        this.tagList = respose.data;
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
	.relative{
		position: relative;
	}
	.absolute{
		position: absolute;
	}
	.center{
		text-align: center;
		justify-content: center;/*水平居中*/
	}
	.login-bg{
		width: 750px;
		height: 2100px;
		background-color: #000;
	}
	.bg-img{
		top: 0;
		left: 0;
	}
	.my-text{
		margin-top: 240px!important;
	}
	.my-money{
        font-size: 80px;
		font-family: 'Arial';
		font-weight: bold;
	    /* background-image:linear-gradient(to bottom,#ede8ae,#8e714d);
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent; */
	    color:#ede8ae; 
        top: 17px;
        width: 700px;
        margin-left: 25px;
        margin-right: 25px;
	}
	.person-num{
        top: 157px;
        left: 265px;
        color: #00fff0;
        font-size: 16px;
        font-weight: 700;
	}
	.exchange{
		width: 634px;
        height: 149px;
        margin-left: 58px;
        padding-left: 20px;
        padding-top: 30px;
	}
	.exchange-bg{
        width: 634px;
        height: 149px;
        left:0;
	}
	.my-head{
		width: 85px;
		height: 85px;
		border-radius:85px;
		top:30px;
	}
	.my-name{
		font-size: 22px;
	    font-weight: 700;
	    color: #e94715;
	    margin-bottom: 10px;
		top:40px;
		left:20px;
	}
	.my-honor{
		font-size: 16px;
	    font-weight: 700;
	    color: #00fff0;
	    top:80px;
		left:-20px;
	}
	.my-medal{
		width: 44px;
		height: 42px;
		top:70px;
		left: -20px;
	}
	.my-medal-number{
		color: #af9a64;
	    font-family: Arial;
	    font-size: 22px;
	    font-weight: 700;
	    top:80px;
	    left: -10px;
	}
	.exchange-btn{
		width:198px;
		height: 57px; 
		top:45px;
		left: 60px;
	}
	.box{
		margin-left: 58px;
		margin-right: 58px;
		margin-top: 60px;
	}
	.honor-title-img{
		width: 126px;
		height: 23px;
	}
	.honor-box-bg{
		width:634px;
		height: 283px; 
		top:30px;
	}
	.team-box-bg{
		width:634px;
		height: 435px; 
	}
	.team_desc{
	    padding-top: 185px;
	}
	.team_desc_text{
        font-size: 14px;
	    color: #08b2c9;
	    font-weight: 700;
	}
	.opera-img{
		width: 238px;
		height: 54px;
		top: 60px;
	}
	.team_detail{
        justify-content:space-between;
        margin-left: 70px;
        margin-right: 70px;
        margin-top: 30px;
        margin-bottom: 10px;
        width: 534px;
	}
	.team_item{
		flex: 1;
	}
	.team-text{
		color: #e7dcbf;
		font-size: 18px;
	}
	.team-text-number{
		color: #ff6c00;
		font-size: 18px;
	}
	.meal-big{
		width: 64px;
		height: 62px;
		top: -16px;
        right: 30px;
	}
	.code_text{
		font-size: 20px;
        font-weight: 700;
        color: #e7dcbf;
	}
	.code_text_value{
		font-size: 20px;
        font-weight: 700;
        color: #00fff0;
	}
	.recharge-btn{
		width: 634px;
		height: 78px;
	}
	.honor-title{
		color: #e7dcbf;
		font-size: 22px;
		float: left;
		width: 450px;
	}
	.honor-text{
		font-size: 18px;
	    color: #604e2b;
	    float: right;
	    margin-top: 8px;
	    width: 124px;
	    text-align: right;
	}
</style>