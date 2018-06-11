<<<<<<< HEAD
<template>
  <div class="waaper">
    <header>
      <img src="../assets/banner.png" alt="">
      <div class="footer">
        <span class="rule" @click="showRule">活动规则</span>
        <span class="home" @click="tohome">会主页</span>
        <span class="price-btn" @click="showPriceRule">奖项设置</span>
      </div>
    </header>

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
    background: url('../assets/bg-three.jpg') 50% 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    >header{
      position: relative;
      .footer{
        margin-top: -135px;
        position: absolute;
        z-index: 3;
      }
      span{
        display: block;
        float: left;
        font-size: 0;
      }
      .rule{
        background: url('../assets/rule-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 251px;
        height: 143px;
        margin-left: 20px;
      }
      .home{
        background: url('../assets/back-home.png') 50% 50% no-repeat;
        background-size: cover;
        width: 198px;
        height: 131px;
        margin-top: 18px;
      }
      .price-btn{
        background: url('../assets/price-set.png') 50% 50% no-repeat;
        background-size: cover;
        width: 249px;
        height: 141px;
        margin-top: 3px;
      }
    }
  }
</style>
=======
<template>
  <div class="waaper">
    <header>
      <img src="../assets/banner.png" alt="">
      <div class="footer">
        <span class="rule" @click="showRule">活动规则</span>
        <span class="home" @click="tohome">会主页</span>
        <span class="price-btn" @click="showPriceRule">奖项设置</span>
      </div>
    </header>

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
    background: url('../assets/bg-three.jpg') 50% 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    >header{
      position: relative;
      .footer{
        margin-top: -135px;
        position: absolute;
        z-index: 3;
      }
      span{
        display: block;
        float: left;
        font-size: 0;
      }
      .rule{
        background: url('../assets/rule-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 251px;
        height: 143px;
        margin-left: 20px;
      }
      .home{
        background: url('../assets/back-home.png') 50% 50% no-repeat;
        background-size: cover;
        width: 198px;
        height: 131px;
        margin-top: 18px;
      }
      .price-btn{
        background: url('../assets/price-set.png') 50% 50% no-repeat;
        background-size: cover;
        width: 249px;
        height: 141px;
        margin-top: 3px;
      }
    }
  }
</style>
>>>>>>> aaadf7bdf9a4112a3dabc7d5caddcdac5781a514
