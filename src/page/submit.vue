<template>
  <div class="waaper">
     <HeaderTop
      @showRule="showRule"
      @tohome="tohome"
      @showPriceRule="showPriceRule">
    </HeaderTop>
    <div class="main-bg">
      <FileIn v-if="!SubmitStatus"></FileIn>
      <SubmitOk v-else></SubmitOk>
    </div>
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
export default {
  data () {
    return {
      showRuleStatus: false,
      showPriceRuleStatus: false,
      SubmitStatus: 1
    }
  },
  components: {
    HeaderTop,
    Rule,
    priceRule,
    FileIn,
    SubmitOk
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
    overflow: hidden;
    background: url('../assets/bg-two.jpg') 50% 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .main-bg{
    margin:0 auto;
    position: relative;
    width: 690px;
    background: url('../assets/model-bg.png') no-repeat;
    height: 1058px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 30px 0;
    box-sizing: border-box;

  }
</style>
