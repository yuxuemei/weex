import foo from './src/pages/home.vue'
//导入路由文件
import router from './src/router/index.js'
// 关键在这里，设置afterEach钩子函数
router.afterEach((to, from, next) => {
  document.title = to.name;
})
foo.el = '#root'
//给根组件设置路由
foo.router = router
export default new Vue(foo);
//第六步 指定一个路由入口
//router.push('home');