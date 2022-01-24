import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { publicPath } from '../../vue.config'

import Epita20214A from '@/views/epita_2021_2022_4A.vue'
import Esiea2021 from '@/views/esiea_2021_2022.vue'
import Epita2020 from '@/views/epita_2020_2021.vue'

const routes: Array<RouteRecordRaw> = [
    {
    path: '/',
    name: '2021-2022 Epita 4A',
    component: Epita20214A,
    alias: '/2021/epita/4A'
  },
  {
    path: '/2021/esiea',
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
