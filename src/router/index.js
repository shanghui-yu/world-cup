import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home.vue'
import Submit from '../page/submit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Submit',
      name: 'Submit',
      component: Submit
    }

  ]
})
