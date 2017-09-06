<template>
    <!-- 首页 -->
	<div class="home">
		
	</div>
</template>
<script>
    require('./easing.js');
	export default{
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
			this.getInfo();
		},
		methods:{
			getInfo(){
                this.$http.get("api/honor/info").then(
                    respose=>{
                        //成功后显示列表
                        if(!respose.data.code){
                            this.honor = respose.data.data;
                            var u = 47;
							if(this.isBegin) return false;
							this.isBegin = true;
							$(".num").css('backgroundPositionY',0);
							var num_arr = (this.formatMoney(this.honor.price)+'').split('');
							var num_len = num_arr.length;
							var html = ""
							var moneyW = 32;
							for (var i = 0; i < num_len; i++) {
								if(num_arr[i] == ","){
                                    html += "<div class='honor-comma'><span class='comma'></span></div>";
                                    moneyW += 11;
                                }else if(num_arr[i] == "."){
                                    html += "<div class='honor-stop'><span class='stop'></span></div>";
                                    moneyW += 11;
                                }else{
                                    html += "<div class='num'></div>";
                                    moneyW += 32;
                                }
							}
							$(".symbol").after(html);
							this.moneyStyle = {
								width:moneyW+"px",
								//marginLeft:'-'+ moneyW/2+"px"
							}
							var _this = this;
							var num_arrmove = (this.honor.price+'').split('');
							var length = num_arrmove.length;
							$(".num").each(function(index){
								var _num = $(this);
								setTimeout(function(){
									_num.animate({ 
										backgroundPositionY: (10-num_arrmove[index])*u //(u*60) - (u*num_arr[index])+"rem"
									},{
										duration: 600+index*100,
										easing: "easeInOutCirc",
										complete: function(){
											if(index==num_arrmove) this.isBegin = false;
										}
									});
								}, index * 300);
								//alert((10-num_arr[index])*u +"rem")
							});
                        }
                    }
                ).catch(
                    error=>{
                        if (error.response) {
                            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                            if(error.response.data.info){
                            	var _this = this;
                                this.$store.state.isShow = true;
                                this.$store.state.comfirmMessage = error.response.data.info;
                                setTimeout(function(){
					                _this.$router.push('/login');
								},3000);
                            }
                        }
                    }
                );
            },
			enterMeal(){
				if(localStorage.t){
                    this.$router.push("/meal");
				}else{
					this.$router.push("/login");
				}
			},
			formatMoney(s, n) { 
                var n = n > 0 && n <= 20 ? n : 2; 
                var s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""; 
                var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1]; 
                var t = ""; 
                for (var i = 0; i < l.length; i++) { 
                    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : ""); 
                } 
                return t.split("").reverse().join("") + "." + r; 
            }
		}
	}
</script>
<style>
	
</style>		
