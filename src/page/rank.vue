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
      <ul class="rank-box" @scroll="scrollMore">
        <li v-for="(item,index) in list" :key="index">
          <a :href="`#/MeJingc/${item.uid}`">
            <span class="one">{{index+1}}</span>
            <span>{{item.nickname?item.nickname:'e族卡友'}}</span>
            <span>{{item.total}}</span>
          </a>
        </li>
        <li class="loading" v-if="list.length && !end">正在加载中</li>
        <li class="end" v-if="list.length && end">已经到底了</li>
        <li class="data-null" v-if="!list.length">
          暂无数据，敬请期待
        </li>
      </ul>
      <div class="me-rank" v-if="list.length">
        <span>{{myUserinfo.ranking}}</span>
        <span>{{myUserinfo.nickname ?myUserinfo.nickname :"e族卡友"}}</span>
        <span>{{myUserinfo.total}}</span>
      </div>
    </div>
    <Rule v-show="showRuleStatus" @showRule="showRule"></Rule>
    <priceRule v-show="showPriceRuleStatus" @showPriceRule="showPriceRule"></priceRule>
  </div>
</template>

<script>
import XHR from '../api'
import HeaderTop from '../components/header-top.vue'
import Rule from '../components/rule'
import priceRule from '../components/price-rule.vue'
export default {
  data () {
    return {
      showRuleStatus: false,
      showPriceRuleStatus: false,
      loading: false,
      // 是否到底了
      end: false,
      // 自己的用户信息
      myUserinfo: {},
      page: 0,
      uid: 'xiaohuids', // 用户openid
      list: []
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
    this.getRank()
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
    getRank () {
      if (this.loading) {
        return
      }
      this.loading = 1
      let time = +new Date()
      let json = {
        page: this.page,
        uid: this.uid,
        size: 20,
        time
      }
      XHR.getRank(json).then(res => {
        let {data, status, rankingInfo} = res.data
        if (!status) {
          this.myUserinfo = rankingInfo
          this.list = [...this.list, ...data]
          if (data.length < 20) {
            this.end = true
          } else {
            this.loading = 0
            this.page++
          }
        }
      })
    },
    scrollMore (e) {
      if (e.target.scrollTop + e.target.clientHeight > e.target.scrollHeight - 80 && !this.loading) {
        this.getRank()
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

  .main{
    margin:0 auto;
    position: relative;
    width: 690px;
    background: url('https://img5.168trucker.com/topic/images/worldCup/model-bg.png') no-repeat;
    height: 1058px;
    display: flex;
    flex-direction: column;
    .title{
      margin:60px auto 0px;
      background: url('https://img5.168trucker.com/topic/images/worldCup/rank-title.png') 50% 50%;
      background-size: cover;
      width: 350px;
      height: 88px;
      font-size: 0;
    }
    .thead,.rank-box li,.me-rank{
      width: 594px;
      margin:0 auto;
      display: flex;
      a{
         display: flex;
      }
      span{
        display: inline-block;
        text-align: center;
        width: 219px;
        line-height: 80px;
        font-size: 30px;
        line-height: 80px;
        height: 80px;
        color: #fff948;
        word-break: break-all;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
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
        background: url('https://img5.168trucker.com/topic/images/worldCup/rank1.png') no-repeat;
        height: 104px;
        border:none;
        .one{
          font-size: 0;
        }
      }
      &:nth-child(2){
        background: url('https://img5.168trucker.com/topic/images/worldCup/rank2.png') no-repeat;
        height: 104px;
        border:none;
        .one{
          font-size: 0;
        }
      }
      &:nth-child(3){
        background: url('https://img5.168trucker.com/topic/images/worldCup/rank3.png') no-repeat;
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
    .data-null{
      height: 400px !important;
      background: inherit !important;
      color: #fff;
      justify-content: center;
      align-items: center;
      font-size: 36px;
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
