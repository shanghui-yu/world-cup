import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home.vue'
import Rank from '../page/rank.vue'

import MeJingc from '../page/meJingc.vue'
import BettingOk from '../page/bettingOk.vue'
import Betting from '../page/betting.vue'

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
      path: '/Rank',
      name: 'Rank',
      component: Rank
    },

    {
      path: '/MeJingc',
      name: 'MeJingc',
      component: MeJingc
    },
    {
      path: '/Betting',
      name: 'Betting',
      component: Betting
    },
    {
      path: '/BettingOk/:uid/:type/:round',
      name: 'BettingOk',
      component: BettingOk
    },
    {
      path: '/Submit',
      name: 'Submit',
      component: Submit
    }

  ]
})
