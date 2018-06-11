<template>
  <div class="waaper">
    <img src="http://img5.168trucker.com/topic/images/worldCup/login.png" alt="" class="log">
    <div class="banner">
      <img src="http://img5.168trucker.com/topic/images/worldCup/banner.png" alt="">
      <span href="" class="rule" @click="showRule">活动规则</span>
      <span href="" class="price" @click="showPriceRule">奖项设置</span>
    </div>

    <footer>
      <a href="#/Rank" class="rank-btn">排行榜</a>
      <a href="#/Betting" class="to-join">立即加入</a>
      <a href="#/MeJingc" class="my-action">我的竞猜</a>
    </footer>
    <Rule v-show="showRuleStatus" @showRule="showRule"></Rule>
    <priceRule v-show="showPriceRuleStatus" @showPriceRule="showPriceRule"></priceRule>
  </div>
</template>

<script>
import Rule from '../components/rule'
import priceRule from '../components/price-rule.vue'
export default {
  data () {
    return {
      showRuleStatus: false,
      showPriceRuleStatus: false
    }
  },
  components: {
    Rule,
    priceRule
  },
  created () {
    // setTimeout(() => {
    //   this.jump('/BettingOk')
    // }, 300)
  },
  mounted () {

  },
  methods: {
    showRule () {
      this.showRuleStatus = !this.showRuleStatus
    },
    showPriceRule () {
      this.showPriceRuleStatus = !this.showPriceRuleStatus
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
    background: url('http://img5.168trucker.com/topic/images/worldCup/bg.jpg') 50% 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    .log{
      width: 169px;
      height: 60px;
      margin:40px 0 0 40px;
    }
    .banner{
      flex:1;
      position: relative;
      img{
        width: 750px;
        height: 460px;
        margin-top: 200px;
      }
      span{
        display: block;
        position: absolute;
        font-size: 0;
      }
      .rule{
        background: url('http://img5.168trucker.com/topic/images/worldCup/rule-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 251px;
        height: 143px;
        left: 30px;
        top:530px;
      }
      .price{
        background: url('http://img5.168trucker.com/topic/images/worldCup/price-set.png') 50% 50% no-repeat;
        background-size: cover;
        width: 249px;
        height: 141px;
        top:530px;
        right: 30px;
      }
    }
    footer{
      height: 150px;
      font-size: 0;
      width: 100%;
      a{
        display: inline-block;
      }
      .rank-btn{
        background: url('http://img5.168trucker.com/topic/images/worldCup/rank-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 165px;
        height: 149px;
      }
      .to-join{
        background: url('http://img5.168trucker.com/topic/images/worldCup/join-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 471px;
        height: 149px;
        margin-left: -30px;
      }
      .my-action{
        background: url('http://img5.168trucker.com/topic/images/worldCup/my-jingcai-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 172px;
        height: 149px;
        margin-left: -31px;
      }
    }
  }
</style>
