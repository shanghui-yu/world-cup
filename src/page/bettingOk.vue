<template>
  <div class="waaper">
     <HeaderTop
      @showRule="showRule"
      @tohome="tohome"
      @showPriceRule="showPriceRule">
    </HeaderTop>
    <div class="main-bg">
      <div class="main" v-if="!SubmitStatus">
        <img src="../assets/betting-title.png" class="title" alt="">
        <ul>
          <li v-for="(item,index) in betting" :key="index">
            <div class="team">
              <figure>
                <img :src="item.teamAImg" alt="">
              </figure>
              <span>{{item.teamAName}}</span>
            </div>
            <div class="team">
              <figure>
                <img src="../assets/win.png" alt="">
              </figure>
              <span>胜</span>
            </div>
            <div class="team">
              <figure>
                <img :src="item.teamBImg" alt="">
              </figure>
              <span>{{item.teamBName}}</span>
            </div>
          </li>
        </ul>
        <div class="next" @click="submit">下一步</div>
      </div>
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
import SubmitOk from '../components/submit-ok.vue'
export default {
  data () {
    return {
      showRuleStatus: false,
      showPriceRuleStatus: false,
      SubmitStatus: false,
      betting: [
        {
          teamAImg: '../assets/price1.png',
          teamAName: 'sdsad',
          teamBName: 'b萨达萨达',
          result: '0',
          teamBImg: '../assets/price1.png'
        },
        {
          teamAImg: '../assets/price1.png',
          teamAName: 'sds2ad',
          teamBName: 'b萨达2萨达',
          result: '0',
          teamBImg: '../assets/price1.png'
        },
        {
          teamAImg: '../assets/price1.png',
          teamAName: 'sds2ad',
          teamBName: 'b萨达3萨达',
          result: '0',
          teamBImg: '../assets/price1.png'
        }
      ]
    }
  },
  components: {
    HeaderTop,
    Rule,
    priceRule,
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
    },
    submit () {
      this.SubmitStatus = true
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 30px 0;
    box-sizing: border-box;
    max-height: 1058px;
    .main{
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      display: flex;
      align-items: center;
      flex-direction: column;
      flex: 1;
      width: 100%;
      height: 100%;
      .title{
        margin:24px auto;
      }
      li{
        background: url('../assets/card-bg.png') no-repeat;
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
        margin: 20px auto 34px;
         background: url('../assets/next.png') no-repeat;
         width: 320px;
         height: 96px;
         font-size: 0;
         display: block;
      }
    }
  }
</style>
