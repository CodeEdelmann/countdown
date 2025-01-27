import Vue from 'vue'
import VueRouter from 'vue-router'
import CountdownForm from '@/views/CountdownForm'
import CountdownDetail from '@/views/CountdownDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'form',
    component: CountdownForm
  },
  {
    path: '/:uuid',
    name: 'detail',
    component: CountdownDetail,
  }
]

const router = new VueRouter({
  routes
})

export default router
