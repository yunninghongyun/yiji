import Vue from 'vue'
import VueRouter from 'vue-router'
import Denglu from './components/Denglu.vue'
import Home from './components/Home.vue'
import YinDaoYe from './components/YinDaoYe.vue'
import ZhanXun from './components/ZhanXun.vue'
import Recommend from './components/Recommend.vue'
import FaBu from './components/FaBu.vue'
import GeRen from './components/GeRen.vue'
import ZxWenzhang from './components/ZxWenzhang.vue'
import Tcdl from './components/Tcdl.vue'
import Touxiang from './components/Touxiang.vue'
import { PUBLICURL } from './constants'
//给Vue项目安装路由功能
Vue.use(VueRouter)
//创建路由
const routes = [
  {
    path: PUBLICURL + '/',
    component: YinDaoYe
  },
  {
    path: PUBLICURL + '/denglu',
    component: Denglu
  },
  {
    path: PUBLICURL + '/home',
    component: Home,
    children: [
      {
        path: PUBLICURL + '/home/zhanxun',
        component: ZhanXun
      },
      {
        path: PUBLICURL + '/home/recommend',
        component: Recommend
      },
      {
        path: PUBLICURL + '/home/fabu',
        component: FaBu
      },
      {
        path: PUBLICURL + '/home/geren',
        component: GeRen
      }
    ]
  },
  {
    path: PUBLICURL + '/zxWenzhang',
    component: ZxWenzhang
  },
  {
    path: PUBLICURL + '/tcdl',
    component: Tcdl
  },
  {
    path: PUBLICURL + '/touxiang',
    component: Touxiang
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
