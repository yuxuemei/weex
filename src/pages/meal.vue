<template>
    <!-- 首页 -->
	<div class="meal">
		<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/common-bg.jpg" class="bg-img absolute" style="width: 750px;height: 1218px;"></image>
		<div style="margin-left:255px;margin-top:40px;margin-bottom:30px;">
			<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/meal-text.png" class="meal-text" alt="充值套餐"></image>
		</div>
        <div class="honor-item" v-for="meal in mealList">
            <image class="meal-content" :src="meal.cover" alt="套餐" style="width:622px;height:250px;margin-bottom:25px;"></image>
        </div>
	</div>
</template>
<script>
  const common = require('./common');
  export default {
    data: {
      mealList:[]
    },
    mounted:function(){
        this.getMealList();
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      getMealList () {
        common.get({
          url:"api/honor",
          callback:respose=>{
            //跳转到用户相应状态的页面中
              this.mealList = respose.data.data;
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
	.meal{
		width: 750px;
		height: 1218px;
		background-color: #000;
	}
	.bg-img{
        top: 0;
	    left: 0;
	}
	.meal-text{
		width: 211px;
		height: 56px;
	}
	.honor-item{
		margin-left: 64px;
	}
</style>		
