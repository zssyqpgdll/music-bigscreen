import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
{
  //大屏数据可视化路由
  path: '/',
  name: 'index',
  component: () => import('../views/index.vue')
},
{
  //大屏数据可视化路由
  path: '/next',
  name: 'next',
  component: () => import('../views/next.vue')
}
]

const router = new VueRouter({
  //提供要使用的历史实现
  //vue-router可以设置两种模式：hash和history
  //如果使用hash模式，一般无需特殊配置；
  //但如果要使用history模式，则前端和服务端要做一定的设置；
  mode: "history",
  routes
})

export default router