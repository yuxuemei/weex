<template>
    <!-- 首页 -->
	<div class="home">
		<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/home-bg.jpg" class="bg-img absolute" style="width: 750px;height: 1218px;"></image>
		<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/stone.png" class="stone-img absolute" style="width: 750px;height: 735px;" ref="stone"></image>
		<div  class="my-text relative">
	    	<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/home-text.png" style="width: 750px;height: 213px;"></image>
	    	<text class="my-money center absolute">￥{{honor.price}}</text>
	    	<text class="person-num absolute" v-text="honor.count"></text>
	    </div>
	    <div class="rule">
	    	<text class="honor-rule">越早进入荣誉殿堂，你的荣誉段位就越高，系统也会自动分配进入的。享受的收益和好处就越多，勋章也就越多！</text>
	    </div>
	    <div style="margin-top:20px;">
	    	<text class="rule-text">查看规则</text>
	    </div>
	    <div style="margin-top:80px;">
	    	<image  @click="enterMeal" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/apply-enter.png" style="width: 750px;height: 206px;"></image>
	    </div>
	    <div style="margin-top:20px;">
	    	<text class="more-about">想了解更多详情请加入QQ群：456792110</text>
	    </div>
	    <router-view></router-view>
	</div>
</template>
<script>
    import common from './common';
	export default {
	    data:function(){
			return{	
			    isBegin:false,
				moneyStyle:{
					width:"64px"
				},
				honor:{
					price:0,
					count:0
				}
			}
		},
	    mounted:function(){
	    	this.getHonorInfo();
	    	/*var element = this.$refs.stone;
	        common.animation.transition(element, {
		        styles: {
		            color: '#FF0000',
		            transform: 'translate(0, 10px)',
		            transformOrigin: 'center center'
		        },
		        duration: 3000, //ms
		        timingFunction: 'ease',
		        delay: 0 //ms
		        }, function () {
		          common.modal.toast({ message: 'animation finished.' })
		    })*/
	    },
	    methods: {
	        getHonorInfo:function(){
	       	    common.get({
		       	   	url:"api/honor/info",
		       	   	callback:respose=>{
		       	   		this.honor = respose.data.data;
	                }
	       	   })
	        },
	        enterMeal:function(){
	        	this.$router.push('/meal')
	        	/*const toUrl = weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/meal.js' // 将a.js的绝对地址转为b.js的绝对地址
		         common.navigator.push({
		            url: toUrl,
		            animated: 'true'
		        })*/
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
	.home{
		width: 750px;
		height: 1218px;
		background-color: #000;
	}
	.bg-img{
        top: 0;
	    left: 0;
	}
	/* .stone-img{
		animation-name:myfirst;
		animation-duration:3s;
		animation-direction:infinite;
		animation: myfirst 3s infinite;
	}
	@keyframes myfirst {  
	        0% {  
	            transform: translate(0px, 0px);  
	        }  
	        50% {  
	            transform: translate(0px, -10px);  
	        }  
	        100% {  
	            transform: translate(0px, 0px);  
	        }  
	    } */
	.my-text{
		margin-top: 460px!important;
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
	.rule{
		margin-left: 52px;
        margin-right: 52px;
	}
	.honor-rule{
		color: #827f62;
		font-size: 18px;
		line-height: 30px;
        text-shadow: #000 0 1px 0; 
        text-align:center;
	}
	.rule-text{
		font-size: 20px;
        color: #0090ff;
        text-align: center;
        text-decoration: underline;
	}
	.more-about{
		color: #00fff0;
	    font-size: 16px;
	    font-weight: 700;
	    padding-bottom: 40px;
	    text-align: center;
	}
</style>		
