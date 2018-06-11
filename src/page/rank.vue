<template>
  <div class="waaper">
    <HeaderTop
      @showRule="showRule"
      @tohome="tohome"
      @showPriceRule="showPriceRule">
    </HeaderTop>
    <div class="main">
      <h3 class="title">排行榜</h3>
      <div class="thead">
        <span>排名</span>
        <span>昵称</span>
        <span>积分</span>
      </div>
      <ul class="rank-box">
        <li v-for="(item,index) in ranks" :key="index">
          <span class="one">{{index+1}}</span>
          <span>{{item.name}}</span>
          <span>{{item.total}}</span>
        </li>
      </ul>
      <div class="me-rank">
        <span>123</span>
        <span>昵称</span>
        <span>94</span>
      </div>
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
      ranks: [
        {
          total: 100,
          name: '李大嘴'
        },
        {
          total: 100,
          name: '李大嘴'
        },
        {
          total: 100,
          name: '李大嘴'
        },
        {
          total: 100,
          name: '李大嘴'
        },
        {
          total: 100,
          name: '李大嘴'
        },
        {
          total: 100,
          name: '李大嘴'
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
    this.ranks = [...this.ranks, ...this.ranks, ...this.ranks]
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
    height: 1058px;
    display: flex;
    flex-direction: column;
    .title{
      margin:60px auto 0px;
      background: url('../assets/rank-title.png') 50% 50%;
      background-size: cover;
      width: 350px;
      height: 88px;
      font-size: 0;
    }
    .thead,.rank-box li,.me-rank{
      width: 594px;
      margin:0 auto;
      display: flex;
      span{
        display: inline-block;
        text-align: center;
        text-align: center;
        width: 219px;
        padding: 32px 0 15px;
        font-size: 30px;
        line-height: 32px;
        height: 32px;
        color: #fff948;
        &:last-child{
          width: 187px;
        }
        &:first-child{
          width: 187px;
        }
      }
    }
    .rank-box{
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding-bottom: 98px;
      box-sizing: border-box;
    }
    .rank-box li{
      line-height: 80px;
      height: 80px;
      border-bottom: 1px solid #28600e;
      &:nth-child(1){
        background: url('../assets/rank1.png') no-repeat;
        height: 104px;
        border:none;
        .one{
          font-size: 0;
        }
      }
      &:nth-child(2){
        background: url('../assets/rank2.png') no-repeat;
        height: 104px;
        border:none;
        .one{
          font-size: 0;
        }
      }
      &:nth-child(3){
        background: url('../assets/rank3.png') no-repeat;
        height: 104px;
        border:none;
        .one{
          font-size: 0;
        }
      }
      span{
        color: #fff;
      }

    }
    .me-rank{
      position: absolute;
      bottom: 0;
     background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUEBAUEAwUFBAUGBgUGCA4JCAcHCBEMDQoOFBEVFBMRExMWGB8bFhceFxMTGyUcHiAhIyMjFRomKSYiKR8iIyL/2wBDAQYGBggHCBAJCRAiFhMWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wgARCABhABwDAREAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAABAIDAQAH/8QAGgEBAQEBAQEBAAAAAAAAAAAAAgMBAAQGCP/aAAwDAQACEAMQAAAA+8fmv6+c1VYTirSad5zVUhgaopMs65l+3NdCKTMK7qY531QS5Y870jleuOXNdZVxHP0buRTVjjohzNxyhRRSkbLNpDIohtpojm9+eOV6RC0YnPzzq53Bl6O93//EACUQAAIDAAEDAwUBAAAAAAAAAAECAAMRMSEiQRAyUQQSM2FxE//aAAgBAQABPwC2sodHtiWGs6OPIiuGGiGtWOkQ4R+pbX9p0e2JYazo48iK6sNBlVudr8eDCAR+pbX/AJnR7ZsZShwyq7O1uPB+IcIw9QY1B+7tPSOgsGHnwYylDhlV2drceD8TZVcLBh90sQWDDz4MZSpw8xL3VcBgJB0dCJVcLBh90sQOMPPgxgyNhEup3uTnyPmAkHR0IlVwsGH3eiuHTRxLqd7k58j5gJB0dCIn1S/b3g7+pXY1b6OPIiOGTQekup3uTnyPn0uqNZ0dVMrtat9HHkRHV00cRqEdiSIQCMPUGXUms6OqmV2NW2jjyIjq66DKvwr/ACXfhf8AnoJ//8QAGREBAAMBAQAAAAAAAAAAAAAAAQAQEQIS/9oACAECAQE/AOucg5BmV1zkHJs56rrnKScteImxJy0OxNiTaHYmzI80NEea9QchEpINZSQZsI3/AP/EABwRAAMBAQEAAwAAAAAAAAAAAAABAhIQEQMhMv/aAAgBAwEBPwCK0OdDWSW/ORWhzocv0qeRWuJ6Knk39CeRPRUcqcieRPQ4mn7ypyJ5JzS9IrlTnjWSK4/j+xzoayRXJrRU6Gsk/JUrzk1oqdD1L8K/RH67/9k=) repeat-x;
      height: 96px;
      line-height: 96px;
      left: 50px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      span{
        color: #ce570e;
        font-size: 36px;
      }
    }
  }
</style>
