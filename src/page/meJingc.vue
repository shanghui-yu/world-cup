<<<<<<< HEAD
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
          <img src="../assets/field1.png" class="title" alt="">
          <div class="betting-box">
            <div class="header">
              投注方式：3串1
              <div class="result">开奖结果：{{item.total}}</div>
            </div>
            <div class="footer">
              <div :class="item.result" v-for="(item,index) in item.team" :key="index">
                <figure>
                  <img :src="item.teamImg" alt="">
                </figure>
              </div>
            </div>
          </div>
        </li>
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
export default {
  data () {
    return {
      showRuleStatus: false,
      showPriceRuleStatus: false,
      jingc: [
        {
          total: 30,
          team: [
            {
              teamImg: '../assets/price1.png',
              result: 'win'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'fail'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'flat'
            }
          ]
        },
        {
          total: 30,
          team: [
            {
              teamImg: '../assets/price1.png',
              result: 'flat'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'fail'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'fail'
            }
          ]
        },
        {
          total: 30,
          team: [
            {
              teamImg: '../assets/price1.png',
              result: 'fail'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'win'
            }
          ]
        }
      ]
    }
  },
  components: {
    HeaderTop,
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
   overflow: hidden;
    background: url('../assets/bg-two.jpg') 50% 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .main{
    margin:0 auto;
    position: relative;
    width: 690px;
    background: url('../assets/model-bg.png') no-repeat;
    max-height: 1058px;
    padding-top: 60px;
    box-sizing: border-box;
     display: flex;
    flex-direction: column;
    align-items: center;
    ul{
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      height: 100%;
    }
    li{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .betting-box{
        margin: 24px auto 30px;
        background: url('../assets/card-bg.png') no-repeat;
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
              background: url('../assets/win.png') 50% 50% no-repeat;
              background-size: cover;
            }
            &.fail::after{
              background: url('../assets/fail.png') 50% 50% no-repeat;
              background-size: cover;
            }
            &.flat::after{
              background: url('../assets/flat.png') 50% 50% no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
</style>
=======
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
          <img src="../assets/field1.png" class="title" alt="">
          <div class="betting-box">
            <div class="header">
              投注方式：3串1
              <div class="result">开奖结果：{{item.total}}</div>
            </div>
            <div class="footer">
              <div :class="item.result" v-for="(item,index) in item.team" :key="index">
                <figure>
                  <img :src="item.teamImg" alt="">
                </figure>
              </div>
            </div>
          </div>
        </li>
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
export default {
  data () {
    return {
      showRuleStatus: false,
      showPriceRuleStatus: false,
      jingc: [
        {
          total: 30,
          team: [
            {
              teamImg: '../assets/price1.png',
              result: 'win'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'fail'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'flat'
            }
          ]
        },
        {
          total: 30,
          team: [
            {
              teamImg: '../assets/price1.png',
              result: 'flat'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'fail'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'fail'
            }
          ]
        },
        {
          total: 30,
          team: [
            {
              teamImg: '../assets/price1.png',
              result: 'fail'
            },
            {
              teamImg: '../assets/price1.png',
              result: 'win'
            }
          ]
        }
      ]
    }
  },
  components: {
    HeaderTop,
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
   overflow: hidden;
    background: url('../assets/bg-two.jpg') 50% 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .main{
    margin:0 auto;
    position: relative;
    width: 690px;
    background: url('../assets/model-bg.png') no-repeat;
    max-height: 1058px;
    padding-top: 60px;
    box-sizing: border-box;
     display: flex;
    flex-direction: column;
    align-items: center;
    ul{
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      height: 100%;
    }
    li{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .betting-box{
        margin: 24px auto 30px;
        background: url('../assets/card-bg.png') no-repeat;
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
              background: url('../assets/win.png') 50% 50% no-repeat;
              background-size: cover;
            }
            &.fail::after{
              background: url('../assets/fail.png') 50% 50% no-repeat;
              background-size: cover;
            }
            &.flat::after{
              background: url('../assets/flat.png') 50% 50% no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
</style>
>>>>>>> aaadf7bdf9a4112a3dabc7d5caddcdac5781a514
