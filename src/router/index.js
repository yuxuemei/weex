import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Meal from '@/pages/meal/meal'
import Rule from '@/pages/rule/rule'
import My from '@/pages/user/my'
import Login from '@/pages/user/login'
import Register from '@/pages/user/register'
import Bind from '@/pages/user/bind'
import Recharge from '@/pages/recharge/recharge'
import Withdraw from '@/pages/withdraw/withdraw'

Vue.use(Router)

export default new Router({
  mode:'history', //去掉/#/
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/meal',
      name: '充值套餐',
      component: Meal
    },{
      path: '/rule',
      name: '规则介绍',
      component: Rule
    },{
      path: '/my',
      name: '竞联赛',
      component: My
    },{
      path: '/recharge',
      name: '充值',
      component: Recharge
    },{
      path: '/withdraw',
      name: '兑换',
      component: Withdraw
    },{
      path: '/login',
      name: '登录',
      component: Login
    },{
      path: '/register',
      name: '注册',
      component: Register
    },{
      path: '/bind',
      name: '绑定支付宝',
      component: Bind
    }
  ]
})
