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
    "storage":weex.requireModule('storage'),
    "token":'',
    "getToken":function(){
        this.storage.getItem('token', event => {
            this.token = event.data
        })
    },
    "get":function(obj){
        this.getToken();
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
        this.getToken();
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
    },
    "getUrl":function(fileName,dir,host){
        var bundleUrl = this.$getConfig().bundleUrl
        var nativeBase;
        var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/';
        }
        else if (isiOSAssets) {
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        }
        else {
            host = host||'localhost:8080';
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            nativeBase = 'http://' + host + '/' + dir + '/';
        }
        var h5Base = './index.html?page=./' + dir + '/';
        // in Native
        var base = nativeBase;
        if (typeof window === 'object') {
            base = h5Base;
        }
         return base+fileName;
    }
}