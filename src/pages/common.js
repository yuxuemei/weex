//http请求
//import axios from 'axios'
//import router from './../../router/index'
//store为实例化生成的
//import store from './../../store/index'
export default{
    "modal":weex.requireModule('modal'),
    "stream":weex.requireModule('stream'),
    "navigator":weex.requireModule('navigator'),
    "animation":weex.requireModule('animation'),
    "token":'',
    "get":function(obj){
        return this.stream.fetch({
          method: 'GET',
          type:"json",
          headers:{
            'Authorization': this.token,
            "Content-Type":"application/json"
          },
          url: 'https://api.91war.com/' + obj.url
        },function(res){
            res.ok ? obj.callback(res) : '(network error)'
        })
    },
    "post":function(obj){
        return this.stream.fetch({
          method: 'POST',
          type:"json",
          headers:{
            'Authorization': this.token,
            "Content-Type":"application/json"
          },
          url: 'https://api.91war.com/' + obj.url,
          body:obj.param
        },res =>{
            if(res.ok){
                obj.callback(res);
            }else{
                this.modal.toast({ message: res.data.info})
            }
        })
    },
    "jump":function(url){
        var baseUrl = this.$getConfig().bundleUrl;
        baseUrl = baseUrl.split('/').slice(0,-1).join('/');
        common.navigator.push({
            url: baseUrl+"/weex.html?hot-reload_controller&page="+url
        },function(){
        })
    }
}