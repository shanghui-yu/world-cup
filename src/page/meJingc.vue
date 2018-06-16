<template>
  <div class="waaper">
     <HeaderTop
      @showRule="showRule"
      @tohome="tohome"
      @showPriceRule="showPriceRule">
    </HeaderTop>

    <div class="main">
      <ul>
        <li v-for="(item ,index) in jingc" :key="index">
          <h3 class="title">第{{item.day}}轮</h3>
          <div class="betting-box">
            <div class="header">
              投注方式：{{item.number.length}}串1
              <div class="result" v-if="item.integral!=null">开奖结果：{{item.integral}}</div>
            </div>
            <div class="footer">
              <div
                :class="[ele=='0'?'flat':'',ele=='1'?'win':'',ele=='-1'?'fail':'']"
                v-if="ele" v-for="(ele,inx) in item.matchRes" :key="inx">
                <figure>
                  <img :src="item.matchList[inx].team_A_logo" alt="">
                </figure>
              </div>
            </div>
          </div>
        </li>
        <li class="data-null" v-if="!jingc.length">暂无竞猜 </li>
      </ul>
    </div>
    <Rule v-show="showRuleStatus" @showRule="showRule"></Rule>
    <priceRule v-show="showPriceRuleStatus" @showPriceRule="showPriceRule"></priceRule>
  </div>
</template>

<script>
import HeaderTop from '../components/header-top.vue'
import Rule from '../components/rule'
import priceRule from '../components/price-rule.vue'
import storage from '../store/storage.js'
import XHR from '../api'
export default {
  data () {
    return {
      showRuleStatus: false,
      showPriceRuleStatus: false,
      uid: 'oq10u1eEnWdb-mCZw8fJXWP0_lEo', // 用户openid
      jingc: [],
      rounds: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七'],
      teams: []
    }
  },
  components: {
    HeaderTop,
    Rule,
    priceRule
  },
  created () {
    this.uid = this.getUid()
    this.getWxconfig()
    this.hideshare()
    this.share()
    this.getMyJingCai()
    if (storage.get('teams')) {
      this.teams = JSON.parse(storage.get('teams'))
    }
  },
  mounted () {
  },
  methods: {
    // 获取我的竞猜信息
    getMyJingCai () {
      let json = {
        uid: this.uid
      }
      XHR.getMyJingCai(json).then(res => {
        let {status, data} = res.data
        if (!status && data) {
          this.jingc = this.picing(data.group)
        }
      })
    },
    picing (data) {
      if (data && data.length) {
        data.forEach((element, index) => {
          // if(element.round==this.teams[index].round){
          //   element.teams = this.teams[index].matchList
          // }
          element.day = this.rounds[element.round - 1]
          element.number = element.matchRes.filter((item) => {
            return item
          })
        })
      }
      return data
    },
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
.loading,.end{
  margin-top: -30px;
}
.data-null{
      height: 400px !important;
      background: inherit !important;
      color: #fff;
      justify-content: center;
      align-items: center;
      font-size: 36px;
    }
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
  .main{
    margin:0 auto;
    position: relative;
    width: 690px;
    background: url('https://img5.168trucker.com/topic/images/worldCup/model-bg.png') no-repeat;
    height: 1058px;
    padding-top: 60px;
    box-sizing: border-box;
     display: flex;
    flex-direction: column;
    align-items: center;
    ul{
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      height: 100%;
      width: 630px;
    }
    li{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .title{
        background: url('https://img5.168trucker.com/topic/images/worldCup/field.png') no-repeat;
        width: 350px;
        height: 88px;
        text-align: center;
        color: rgb(255, 249, 72);
        text-shadow: 0px 1px 0px rgba(55, 115, 32, 0.75);
        font-size: 48px;
        line-height: 88px;
      }
      .betting-box{
        margin: 24px auto 30px;
        background: url('https://img5.168trucker.com/topic/images/worldCup/card-bg.png') no-repeat;
        width: 572px;
        height: 230px;
        display: flex;
        flex-direction: column;
        padding: 8px;
    box-sizing: border-box;
        .header{
          font-size: 30px;
          color: #519d0e;
          margin-top: 20px;
          line-height: 55px;
          padding-left: 30px;
          display: flex;
          justify-content: space-between;
          margin-right: 20px;
        }
        .result{
          border-radius: 12px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAA+CAMAAADDLrFwAAAAUVBMVEXWvgjjnwj/kwDnnQf6lQH/lAD/jwD/igD/fgD/hgD/egD/dwD/ggD/aADWvgj/oAD/bgD/mQD/nQD/cgC8TgD/owC2WQDIgwTeZwDFjQPgWwAs4RD5AAAABXRSTlOIkXeNe15FS0QAAADsSURBVCjPhdDLWsQgEETh0jE0EGJuTkZ9/weVUM1XZjZTqz7/DvDe9nF7a7th8N053AXsucPM/gfsCqHtBMx1gpk9B5+3ABt76x0E7LA6sM3CunHBzGB1DmtgC7wF3gJY4oa1DauALfAWeA9W2k7gf6bCDUNrQWALYA4ltiEK2B1CA+ScLXCl3mfn5BBbCyzWJhgXMXIdEB2KdxKwU+6Q6pAq7FxkXwDl3NihsAWI3LhwGB1270XAFrCvgKluz9wyTa0F3gK2AIvDwkdiFLCvgO+6X+48cdR99R1Ha4G3gC3A44d7cPi87mU/7Q9jkiuWWDJEHgAAAABJRU5ErkJggg==) repeat-x;
          width: 220px;
          color: #fff;
          text-align: center;
          display: inline-block;
          height: 62px;
          text-align: center;
        }
        .footer{
          flex:1;
          div{
            width: 33%;
            position: relative;
            z-index: 1;
            float: left;
            height: 100%;
            figure{
              width: 90px;
              height: 90px;
              border:2px solid #fff;
              border-radius: 50%;
              overflow: hidden;
              margin-left: 25px;
              img{
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &::after{
              content: '';
              position: absolute;
              z-index: -1;
              bottom: 8px;
              left: 90px;
              width: 74px;
              height: 74px;
              display: block;
            }
            &.win::after{
              background: url('https://img5.168trucker.com/topic/images/worldCup/win.png') 50% 50% no-repeat;
              background-size: cover;
            }
            &.fail::after{
              background: url('https://img5.168trucker.com/topic/images/worldCup/fail.png') 50% 50% no-repeat;
              background-size: cover;
            }
            &.flat::after{
              background: url('https://img5.168trucker.com/topic/images/worldCup/flat.png') 50% 50% no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
</style>
