<template>
      <div class="main">
          <div class="header row">
              <text class="header-item" style="color:#fff">英雄联盟</text>
              <text class="header-item">DOTA2</text>
              <text class="header-item">王者荣耀</text>
          </div>
          <scroller>
            <div  v-bind:style="{'height':h}">
              <div  v-for="(m,key,idx) in matchList">
                <div class="row list-tag" v-if="m.length>0">
                  <img :src="tagImg" style="width:20px;height:18px;margin-right:10px;margin-top:10px;"/>
                  <text>{{key}}</text>
                </div> 
                <!-- <div class="wrapper" @click="update">
                  <image :src="logoUrl" class="logo"></image>
                  <text class="title">Hello {{target}}</text>
                </div> -->
                  <div>
                    <div v-for="match in m" :key="match.id">
                      <div class="list-item">
                          <div class="row item-attr">
                              <image :src="peopleImg" style="width:19px;height:19px;margin-right:5px;margin-top:8px;"></image>
                              <text class="color8e94b7 font22">{{match.apply_people}}/{{match.activity_people}}</text> 
                              <text class="item-split font22">|</text>
                              <text class="color8e94b7 font22">5</text> 
                              <image :src="diamondImg" style="width:12px;height:11px;margin-left:10px;margin-top:15px;"></image>
                              <text class="item-split font22">|</text>
                              <text class="color8e94b7 font22">满{{match.begin_condition}}人开</text>
                           </div>
                           <div class="row item-info">
                              <image :src="match.cover" class="cover"></image>
                              <div class="title-desc">
                                  <text class="item-title">{{match.title}}</text>
                                  <text class="item-bottom color8e94b7">{{match.competition_type}}</text>
                              </div>
                              <div class="item-info">
                                  <text class="item-number">{{match.totals}}</text>
                                  <text v-if="match.match_status == 0" class="item-bottom item-state " style="color:#000;">距开赛</text>
                                  <text v-if="match.match_status == 1" class="item-bottom item-state " style="color:#000;">报名中</text>
                                  <text v-if="match.match_status == 2" class="item-bottom item-state " style="color:#B52E25;">进行中</text>
                                  <text v-if="match.match_status == 3" class="item-bottom item-state " style="color:#000;">已结束</text>
                                  <text v-if="match.match_status == -1" class="item-bottom item-state" style="color:#000;">终止比赛</text>
                              </div>
                           </div>
                      </div>
                      <div class="item-grey"> <text class="item-split font22"></text></div>   
                    </div> 
                  </div>  
              </div> 
              <loading class="loading center" @loading="onloading" :display="showLoading">
                <text class="indicator center">{{loading}}</text>
              </loading>
            </div>
          </scroller>
      </div>
</template>
<script>
  var stream = weex.requireModule('stream');
  var modal = weex.requireModule('modal');
  var page = 1;
  export default {
    data:function(){
      return{ 
          logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
          target: 'World',
          tagImg:'http://oslg9bt6h.bkt.clouddn.com/honor/img/tag.png',
          peopleImg:'http://oslg9bt6h.bkt.clouddn.com/honor/img/people.png',
          diamondImg:'http://oslg9bt6h.bkt.clouddn.com/honor/img/diamond.png',
          matchList:[],
          h:0,
          showLoading: 'hide',
          loading:"Loading ..."
      }
    },
    mounted:function(){
      this.getMatchList(res => {
        this.matchList = res.ok ? res.data.data : '(network error)';
        var allLength = 0; //数据比赛个数
        var titLeng = 0; //标题个数
        for(var key in this.matchList){
            allLength += this.matchList[key].length;
            if(this.matchList[key].length > 0){
              titLeng++;
            }
        }
        console.log(titLeng+"==="+allLength);
        this.h = (titLeng*106) + (allLength*205)+'px';
        page++;
      });
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      getMatchList (callback) {
        return stream.fetch({
          method: 'GET',
          type: 'json',
          url: 'https://api.91war.com/api/activity?page='+page+'&row=100&gameId=20'
        }, callback)
      },
      //上滑加载数据
      onloading: function(event) {
          modal.toast({ message: 'loading', duration: 1 })
          this.showLoading = 'show';
          var self  = this;
          setTimeout(function(){
              self.getMatchList(res => {
                if(res.ok){
                    const item = res.data.data;
                    const length = item.length;
                    if(length>0){
                        for (var i = 0; i < length; ++i) {
                            self.matchList.push(item[i]);
                        }
                        self.h =  (self.matchList.length*205)+'px';
                        self.showLoading = 'hide';
                        page++;
                    }else{
                        self.loading = "没有更多数据了"
                    }
                }
              });
          }, 1500)
      }
    }
  }
</script>
<style>
  .main{background-color:#f3f3f3;}
  .wrapper { align-items: center;}
  .header{
      height: 80px;
      width: 750px;
      background-color: #2A2131;
      justify-content:space-around;
  }
  .header-item{
    line-height: 80px;
    color: #9093b7;
  }
  .font22{
    font-size:22px;
  }
  .list-tag{
    padding-top: 36px;
    padding-bottom: 28px;
    padding-left: 35px;
    background-color:#f3f3f3;
  }
  .row{
    flex-direction: row;
  }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
  .list-item{
    background-color:#fff;
    padding-left: 35px;
    padding-right: 35px; 
    padding-top: 25px;
    padding-bottom: 25px;
    width: 750px;
  }
  .color8e94b7{
    color: #8e94b7;
  }
  .item-attr{
    padding-bottom: 25px;
  }
  .item-split{
    color: #8e94b7;
    margin-left: 40px!important;
    margin-right: 40px!important;
  }
  .cover{
    width:80px;
    height:80px;
    border-width:1px;
    border-style:solid;
    border-color:#9092B8;
    border-radius:5px;
  }
  .title-desc{
    padding-left: 29px;
    width: 429px;
  }
  .item-title{
    font-size:26px;
    color: #000;
  }
  .item-bottom{
    font-size:20px;
    color: #000;
    padding-top: 18px!important;
  }
  .item-number{
    color:#F3C63F;
    text-align: right;
  }
  .item-info{
     width: 171px;
  }
  .item-state{
     text-align: right;
  }
  .item-grey{
    height: 20px;
    width: 750px;
    background-color:#f3f3f3;
  }
  .loading {
    width: 750px;
    height: auto;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .indicator {
    color: #888888;
    text-align: center;
    margin-bottom: 20px!important;
  }
</style>

