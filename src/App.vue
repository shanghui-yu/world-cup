<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import XHR from './api'
export default {
  name: 'App',
  created () {
    this.getUserinfo()
  },
  methods: {
    getUserinfo () {
      let href = location.href
      if (!localStorage.getItem('userInfoWorldCup')) {
        if (href.indexOf('openid') > -1) {
          let json = {}
          json['uid'] = this.getQueryString('openid')
          json['nickname'] = this.getQueryString('nickname')
          json['headimgurl'] = this.getQueryString('headimgurl')
          localStorage.setItem('userInfoWorldCup', JSON.stringify(json))
          this.getUser(json['uid'])
        } else {
          // location.href = 'https://topic.vr0101.com/auth'
        }
      }
    },
    getUser (uid) {
      let json = {
        uid: `${uid}`
      }
      XHR.getUser(json).then((res) => {
        let {data, status} = res.data
        if (!status) {
          localStorage.setItem('userInfoWorldCup', JSON.stringify(data))
        }
      })
    }
  }
}
</script>

<style>
@import './mixin/publick.css';
#app {
  height: 100%;
  overflow: hidden;
}
</style>
