<template>
  <div class="waaper">
    <img src="https://img5.168trucker.com/topic/images/worldCup/login.png" alt="" class="log">
    <div class="banner">
      <img  :class="[beginAnimation?'bounceInDown animated':'swing animated']" src="https://img5.168trucker.com/topic/images/worldCup/banner.png" :style="{marginTop:mtop}" alt="">
      <span :class="['rule',showBtn?'show':'']" @click="showRule" :style="{top:top}">活动规则</span>
      <span :class="['price',showBtn?'show':'']" @click="showPriceRule" :style="{top:top}">奖项设置</span>
    </div>

    <footer :class="[showBtn?'show':'']">
      <a href="#/Rank" @click.prevent="torank" class="rank-btn">排行榜</a>
      <a href="#/Betting" class="to-join">立即加入</a>
      <a href="#/MeJingc" @click.prevent="toPrece" class="my-action">我的竞猜</a>
    </footer>
    <Rule v-show="showRuleStatus" @showRule="showRule"></Rule>
    <priceRule v-show="showPriceRuleStatus" @showPriceRule="showPriceRule"></priceRule>
  </div>
</template>

<script>
import Rule from '../components/rule'
import priceRule from '../components/price-rule.vue'
import storage from '../store/storage.js'
export default {
  data () {
    return {
      mtop: '200px',
      top: '530px',
      beginAnimation: false,
      showRuleStatus: false,
      showBtn: false,
      user: {},
      sourceNumber: 1,
      showPriceRuleStatus: false
    }
  },
  components: {
    Rule,
    priceRule
  },
  created () {
    this.getWxconfig()
    this.hideshare()
    this.share()
    if (window.innerHeight < 1182) {
      this.mtop = '115px'
      this.top = '445px'
    }
    setTimeout(() => {
      this.beginAnimation = true
      setTimeout(() => {
        this.beginAnimation = false
        setTimeout(() => {
          this.showBtn = true
        }, 1e3)
      }, 500)
    }, 200)
    if (this.getCookie('sourceNumber')) {
      this.sourceNumber = JSON.parse(this.getCookie('sourceNumber'))
      this.setCookie('sourceNumber', this.sourceNumber + 1)
    } else {
      this.setCookie('sourceNumber', this.sourceNumber)
    }
    console.log(this.sourceNumber)
    if (storage.get('userInfoWorldCup')) {
      this.user = JSON.parse(storage.get('userInfoWorldCup'))
    }
  },
  mounted () {

  },
  methods: {
    showRule () {
      ga('send', 'event', '点击活动规则', this.sourceNumber, this.user.nickname)
      this.showRuleStatus = !this.showRuleStatus
    },
    showPriceRule () {
      ga('send', 'event', '点击奖项设置', this.sourceNumber, this.user.nickname)
      this.showPriceRuleStatus = !this.showPriceRuleStatus
    },
    torank () {
      ga('send', 'event', '点击排行榜', this.sourceNumber, this.user.nickname)
      this.jump('/Rank')
    },
    toPrece () {
      ga('send', 'event', '点击我的竞猜', this.sourceNumber, this.user.nickname)
      this.jump('/MeJingc')
    }
  }
}
</script>

<style scoped lang="less">
  .waaper{
    height: 100%;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: url('https://img5.168trucker.com/topic/images/worldCup/bg-new.jpg') 50% 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x:hidden;
    .log{
      width: 169px;
      height: 60px;
      margin:40px 0 0 40px;
    }
    .banner{
      flex:1;
      position: relative;
      z-index: 1;
      img{
        width: 750px;
        height: 460px;
        margin-top: 200px;
        // animation:eye 5s infinite linear;
      }
      span{
        display: block;
        position: absolute;
        font-size: 0;
        // animation:flash 1s linear;
      }
      .rule{
        background: url('https://img5.168trucker.com/topic/images/worldCup/rule-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 251px;
        height: 143px;
        left: 30px;
        top:530px;
        transform: translate3d(-120%,0,0);
        transition: all 0.5s ease;
        z-index: -1;
        &.show{
          transform: translate3d(0,0,0);
        }
      }
      .price{
        background: url('https://img5.168trucker.com/topic/images/worldCup/price-set.png') 50% 50% no-repeat;
        background-size: cover;
        width: 249px;
        height: 141px;
        top:530px;
        right: 30px;
        transform: translate3d(120%,0,0);
        transition: all 0.5s ease;
        &.show{
          transform: translate3d(0,0,0);
        }
      }
    }
    footer{
      height: 150px;
      font-size: 0;
      width: 100%;
      transform: translate3d(0,100%,0);
      transition: all 0.5s ease;
      &.show{
        transform: translate3d(0,0,0);
      }
      a{
        display: inline-block;
      }
      .rank-btn{
        background: url('https://img5.168trucker.com/topic/images/worldCup/rank-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 165px;
        height: 149px;
      }
      .to-join{
        background: url('https://img5.168trucker.com/topic/images/worldCup/join-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 471px;
        height: 149px;
        margin-left: -30px;
      }
      .my-action{
        background: url('https://img5.168trucker.com/topic/images/worldCup/my-jingcai-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 172px;
        height: 149px;
        margin-left: -31px;
      }
    }
  }

</style>
