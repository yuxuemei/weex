<template>
	<div class="header row">
        
    </div>
</template>
<script>
	var stream = weex.requireModule('stream');
  var modal = weex.requireModule('modal');
  var navigator = weex.requireModule('navigator');
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png'
    },
    mounted:function(){
    	navigator.getParams(callback) //async
        var param=navigator.getParams(); //sync
        console.log(param);
    },
    methods: {
    }
  }
</script>	