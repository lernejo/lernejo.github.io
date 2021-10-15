import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { publicPath } from '../../vue.config'

import Esiea2021 from '@/views/esiea20212022.vue'
import Epita2020 from '@/views/epita20202021.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '2021-2022 Esiea',
    component: Esiea2021,
    alias: '/2021/esiea'
  },
  {
    path: '/2020/epita',
    name: '2020-2021 Epita',
    component: Epita2020
  },
]

const router = createRouter({
  history: createWebHistory(publicPath),
  routes
})

export default router
