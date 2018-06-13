<template>
  <div class="waaper">
     <HeaderTop
      @showRule="showRule"
      @tohome="tohome"
      @showPriceRule="showPriceRule">
    </HeaderTop>
    <div class="main-bg">
      <FileIn @submit="submit" :userinfo="userinfo"></FileIn>
    </div>
    <toast :msg="toastMsg" v-if="toastState"></toast>
    <Rule v-show="showRuleStatus" @showRule="showRule"></Rule>
    <priceRule v-show="showPriceRuleStatus" @showPriceRule="showPriceRule"></priceRule>
  </div>
</template>

<script>
import HeaderTop from '../components/header-top.vue'
import Rule from '../components/rule'
import priceRule from '../components/price-rule.vue'
import FileIn from '../components/file-in.vue'
import SubmitOk from '../components/submit-ok.vue'
import XHR from '../api'
import toast from '../components/toast'
import storage from '../store/storage.js'
export default {
  data () {
    return {
      toastMsg: '',
      toastState: false,
      showRuleStatus: false,
      showPriceRuleStatus: false,
      SubmitStatus: 1,
      loading: false,
      userinfo: {}
    }
  },
  components: {
    HeaderTop,
    Rule,
    priceRule,
    FileIn,
    toast,
    SubmitOk
  },
  created () {
    this.getWxconfig()
    this.hideshare()
    let userinfo = storage.get('userInfoWorldCup')
    if (userinfo) {
      this.userinfo = JSON.parse(userinfo)
    }
  },
  mounted () {

  },
  methods: {
    showRule () {
      this.showRuleStatus = !this.showRuleStatus
    },
    showPriceRule () {
      this.showPriceRuleStatus = !this.showPriceRuleStatus
    },
    tohome () {
      this.jump('/')
    },
    showToast (msg) {
      if (this.toastState) return
      this.toastMsg = msg
      this.toastState = true
      setTimeout(() => {
        this.toastState = false
      }, 2e3)
    },
    checkTel (e) {
      var t = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
      return !!t.test(e.trim())
    },
    submit (json) {
      if (this.loading) {
        return
      }
      this.loading = true
      ga('send', 'event', '提交个人信息', '世界杯活动|公众号底部菜单', this.userinfo.nickname)
      if (!this.checkTel(json.phone)) {
        this.showToast('请输入正确的手机号')
        this.loading = false
        return
      }
      let user = localStorage.getItem('userInfoWorldCup')
      if (user) {
        user = JSON.parse(user)
        json.uid = user.uid // user.uid
      }
      XHR.updateUser(json).then(res => {
        let {status, message} = res.data
        if (!status) {
          this.showToast('提交成功')
          setTimeout(() => {
            this.jump('/')
          }, 2e3)
        } else {
          this.showToast(message)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .waaper{
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: url('https://img5.168trucker.com/topic/images/worldCup/bg-two.jpg') 50% 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .main-bg{
    margin:0 auto;
    position: relative;
    width: 690px;
    background: url('https://img5.168trucker.com/topic/images/worldCup/model-bg.png') no-repeat;
    height: 1058px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 30px 0;
    box-sizing: border-box;

  }
</style>
