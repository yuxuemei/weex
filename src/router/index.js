//定义路由
//第一步导入路由模块vue-router和vue.js
import Vue from 'vue'
import Router from'vue-router'
//第二步导入组件
import home from'./../pages/home.vue'
import login from './../pages/login.vue'
//第三步让Vue使用vue-router当做自己的路由
Vue.use(Router)
//第四步创建路由对象
export default new Router({
  mode: 'abstract',
  //weex中只能使用abstract类型默认可以不写系统会自动设置为abstract//定义路由
  scrollBehavior:()=>({ // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
　　　y:0
　}),
  routes: [
    {
      path: '/',
      name:"首页",
      component: home
    },
    {
      path: '/login',
      name:"登录",
      component: login
    }
    /*{
      path: '/article/:url(.*)?',
      component: ArticleView
    },
    {
      path: '/item/:id(\\d+)',
      component: CommentView
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/',
      redirect: '/home'
    }*/
  ]
})