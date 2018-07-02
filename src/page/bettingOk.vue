<template>
  <div class="waaper">
     <HeaderTop
      @showRule="showRule"
      @tohome="tohome"
      @showPriceRule="showPriceRule">
    </HeaderTop>
    <div class="main-bg">
      <div class="main" v-if="!SubmitStatus">
        <img :src="`https://img5.168trucker.com/topic/images/worldCup/betting-title${betting.length}.png`" class="title" alt="">
        <ul v-if="type=='1'">
          <li v-for="(item,index) in betting" :key="index">
            <div class="team">
              <figure>
                <img :src="item.team_A_logo" alt="">
              </figure>
              <span>{{item.team_A_name}}</span>
            </div>
            <div class="team">
              <figure>
                <img
                  src="https://img5.168trucker.com/topic/images/worldCup/win.png"
                  v-if="item.teamType=='胜'" alt="">
                <img src="https://img5.168trucker.com/topic/images/worldCup/fail.png"
                  v-if="item.teamType=='负'"
                  alt="">
                <img
                  src="https://img5.168trucker.com/topic/images/worldCup/flat.png"
                  v-if="item.teamType=='平'"
                  alt="">
              </figure>
              <span>{{item.teamType}}</span>
            </div>
            <div class="team">
              <figure>
                <img :src="item.team_B_logo" alt="">
              </figure>
              <span>{{item.team_B_name}}</span>
            </div>
          </li>
        </ul>
        <ul v-if="type=='2'">
           <!-- 淘汰赛 -->
          <li v-for="(item,index) in betting" :key="index" v-if="gifts.cate && gifts.cate==1">
            <div class="team">
              <figure>
                <img :src="item.team_A_logo" alt="">
              </figure>
              <span>{{item.team_A_name}}</span>
            </div>
            <div class="team">
              <figure>
                <img
                  src="https://img5.168trucker.com/topic/images/worldCup/win.png"
                  v-if="item.teamType=='胜'" alt="">
                <img src="https://img5.168trucker.com/topic/images/worldCup/fail.png"
                  v-if="item.teamType=='负'"
                  alt="">
                <img
                  src="https://img5.168trucker.com/topic/images/worldCup/flat.png"
                  v-if="item.teamType=='平'"
                  alt="">
              </figure>
              <span>{{item.teamType}}</span>
            </div>
            <div class="team">
              <figure>
                <img :src="item.team_B_logo" alt="">
              </figure>
              <span>{{item.team_B_name}}</span>
            </div>
          </li>
          <!-- 积分 -->
          <li v-if="gifts.cate && gifts.cate==2">
            <div class="team">
              <figure>
                <img :src="`https://img5.168trucker.com${gifts.img}`" alt="">
              </figure>
              <span>{{gifts.integral}}积分</span>
            </div>
          </li>
          <!-- 小礼品 -->
          <li v-if="gifts.cate && gifts.cate==3">
            <div class="team">
              <figure>
                <img :src="gifts.giftImg" alt="">
              </figure>
              <span>{{gifts.giftName}}</span>
            </div>
          </li>
        </ul>
        <div class="next" @click="submit">下一步</div>
      </div>
      <SubmitOk v-else></SubmitOk>
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
import SubmitOk from '../components/submit-ok.vue'
import storage from '../store/storage.js'
import XHR from '../api'
import toast from '../components/toast'
export default {
  data () {
    return {
      showRuleStatus: false,
      showPriceRuleStatus: false,
      SubmitStatus: false,
      toastMsg: '',
      toastState: false,
      lock: false,
      whiteList: ['oq10u1bjVsiy276-ExPUrTbK0fQY', 'oq10u1RPuGvQDdFGA7XuWccR1MDU', 'oq10u1fDhu3rJMpRT-cTyPvYjVt4'],
      uid: '',
      type: '',
      round: ''
    }
  },
  components: {
    HeaderTop,
    Rule,
    priceRule,
    toast,
    SubmitOk
  },
  computed: {
    betting () { return this.$store.state.selectObj },
    MatchRes () { return this.$store.state.MatchRes },
    gifts () { return this.$store.state.gifts }
  },
  created () {
    this.uid = this.$route.params.uid
    this.type = this.$route.params.type
    this.round = this.$route.params.round
    this.getWxconfig()
    this.hideshare()
    this.share()
  },
  mounted () {
  },
  methods: {
    showToast (msg) {
      if (this.toastState) return
      this.toastMsg = msg
      this.toastState = true
      setTimeout(() => {
        this.toastState = false
      }, 2e3)
    },
    showRule () {
      this.showRuleStatus = !this.showRuleStatus
    },
    showPriceRule () {
      this.showPriceRuleStatus = !this.showPriceRuleStatus
    },
    tohome () {
      this.jump('/')
    },
    checkIsperiods () {
      let periods = storage.get('periods')
      if (!periods || (periods && periods !== this.round)) {
        storage.set('periods', this.round)
      }
    },
    submit () {
      // 白名单
      let periods = storage.get('periods')
      if (this.whiteList.indexOf(this.uid) > -1 && periods && periods === this.round) {
        this.SubmitStatus = true
        return
      }
      // 白名单结束
      if (this.lock) {
        return
      }
      this.lock = true
      let time = +new Date()
      let json = {
        time,
        uid: this.uid,
        type: this.type,
        matchRes: this.MatchRes.join(',')
      }
      if (this.type === '2') {
        json.cate = Number(this.gifts.cate)
        json.token = this.gifts.token
        switch (this.gifts.cate) {
          case 2:
            json.integral = Number(this.gifts.integral)
            delete json.matchRes
            break
          case 3:
            json.giftName = this.gifts.giftName
            delete json.matchRes
            break
        }
      }
      let now = +new Date()
      let endTime = +new Date('2018-06-30 22:00:00')
      if(now<=endTime){
        this.checkIsperiods()
        this.SubmitStatus = true
      }else{
        XHR.postMyJingCai(json).then(res => {
          this.lock = false
          this.setCookie('isFlop', 1) // 设置是否翻过牌
          let {status, message, isSlow} = res.data
          if (!status) {
            this.checkIsperiods()
            // 淘汰赛如果库存没有做的操作
            if (this.type === '2' && isSlow) {
              this.showToast('手慢了奖品没有了')
              return
            }

            this.SubmitStatus = true
          } else {
            this.showToast(message)
          }
        })
      }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 30px 0;
    box-sizing: border-box;
    height: 1058px;
    .main{
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      display: flex;
      align-items: center;
      flex-direction: column;
      flex: 1;
      width: 100%;
      .title{
        margin:24px auto;
      }
      li{
        background: url('https://img5.168trucker.com/topic/images/worldCup/card-bg.png') no-repeat;
        width: 572px;
        height: 230px;
        display: flex;
        padding: 8px;
        box-sizing: border-box;
        margin-bottom: 18px;
        .team{
          display: flex;
          flex-direction: column;
          flex:1;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          figure{
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border:2px solid #fff;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          span{
            font-size: 30px;
            margin-top: 16px;
            overflow: hidden;
            color: #685c09;
            width: 100%;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .next{
        margin: 20px auto 30px;
         background: url('https://img5.168trucker.com/topic/images/worldCup/next.png') no-repeat;
         width: 320px;
         height: 96px;
         font-size: 0;
         display: block;
      }
    }
  }
</style>
