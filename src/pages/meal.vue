<template>
    <!-- 首页 -->
	<div class="meal">
		<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/common-bg.jpg" class="bg-img absolute" style="width: 750px;height: 1218px;"></image>
		<div style="margin-left:255px;margin-top:40px;margin-bottom:30px;">
			<image src="http://oslg9bt6h.bkt.clouddn.com/honor/img/meal-text.png" class="meal-text" alt="充值套餐"></image>
		</div>
        <div class="honor-item">
            <image class="meal-content" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/meal1.png" alt="套餐" style="width:622px;height:250px;margin-bottom:25px;"></image>
        </div>
        <div class="honor-item">
            <image class="meal-content" src="http://oslg9bt6h.bkt.clouddn.com/honor/img/meal1.png" alt="套餐" style="width:622px;height:250px;margin-bottom:25px;"></image>
        </div>
	</div>
</template>
<script>
  var stream = weex.requireModule('stream');
  var modal = weex.requireModule('modal');
  var page = 1;
  export default {
    data: {
      mealList:[]
    },
    mounted:function(){
        /*this.getMealList(res => {
            this.mealList = res.ok ? res.data.data : '(network error)';
        })*/
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      getMealList (callback) {
        return stream.fetch({
          method: 'GET',
          type: 'json',
          url: 'https://api.91war.com/api/honor'
        }, callback)
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
