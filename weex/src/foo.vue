<template>
  <scroller>
    <div class="main">
      <div class="header row">
          <text class="header-item" style="color:#fff">英雄联盟</text>
          <text class="header-item">DOTA2</text>
          <text class="header-item">王者荣耀</text>
      </div>
        <div class="row list-tag">
          <img :src="tagImg" style="width:20px;height:18px;margin-right:10px;margin-top:10px;"/>
          <text>新手赛</text>
        </div> 
        <!-- <div class="wrapper" @click="update">
          <image :src="logoUrl" class="logo"></image>
          <text class="title">Hello {{target}}</text>
        </div> -->
        <scroller style="height:900px;">
            <ul>
                <li v-for="match in matchList" :key="match.id">
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
                <div class="item-grey">{{h}}</div>   
                </li> 
            </ul>
        </scroller>
    </div>
  </scroller>
</template>
<script>
  var stream = weex.requireModule('stream');
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World',
      tagImg:'http://localhost:8082/image/tag.png',
      peopleImg:'http://localhost:8082/image/people.png',
      diamondImg:'http://localhost:8082/image/diamond.png',
      cover:"http://oslg9bt6h.bkt.clouddn.com/uploads/images/1500539189199",
      matchList:[],
      h:0
    },
    mounted:function(){
      this.getMatchList(res => {
        this.matchList = res.ok ? res.data.data : '(network error)';
      });
      this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
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
          url: 'https://api.91war.com/api/activity?page=1&row=10&gameId=16&type=15'
        }, callback)
      }
    }
  }
</script>
<style>
  .main{background-color:#f3f3f3;height:100%;}
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
</style>

