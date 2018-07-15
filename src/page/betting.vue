<template>
  <div class="waaper">
    <header>
      <img src="https://img5.168trucker.com/topic/images/worldCup/banner1.png" alt="">
      <div class="footer">
        <span class="rule" @click="showRule">活动规则</span>
        <span class="home" @click="tohome">会主页</span>
        <span class="price-btn" @click="showPriceRule">奖项设置</span>
      </div>
      <div class="table">
          <div class="card" @click="showResult(item,ind)" v-for="(item ,ind) in cards.imgs" :key="ind">
            <!-- 默认卡牌 -->
            <figure :class="['defalt',item.level?`level${item.level}`:'']"><img :src="`${item.url}!300`" alt=""></figure>

            <div class="result" :total="items.type" v-for="items in selectObj" v-if="items.index == ind" :key="items.id">
              <figure><img :src="items.randomTeam>0.5?items.team_A_logo:items.team_B_logo" alt=""></figure>
            </div>
          </div>
          <div :class="[bettingStatus?'submit':'table-btn']" @click="again"></div>
      </div>
    </header>
    <!-- 翻牌结果 -->
    <!-- 正式比赛 -->
    <Guessing
      v-if="showResultStatus"
      :selectObj="selectimg"
      :matchList="cards.matchList"
      @showResult="showResult"
      @select="select">
    </Guessing>
    <!-- 淘汰赛 -->
    <eliminate  v-if="showEliminateResult&& cards.type!=1 &&cards.cate==1"
      :selectObj="selectimg"
      :matchList="cards.matchList"
      :cards="cards"
      @showEliminate="showEliminate"
      @select="select">
    </eliminate>
    <!--积分 -->
    <Integral  v-if="showEliminateResult && cards.type!=1 &&cards.cate==2"
      :selectObj="selectimg"
      :cards="cards"
      @showEliminate="showEliminate"
      @submit="submit">
    </Integral>
    <!-- 小礼品 -->
    <SmallGift  v-if="showEliminateResult&& cards.type!=1 && cards.cate==3"
      :selectObj="selectimg"
      :cards="cards"
      @showEliminate="showEliminate"
      @submit="submit">
    </SmallGift>

    <toast :msg="toastMsg" v-if="toastState"></toast>
    <Rule v-show="showRuleStatus" @showRule="showRule"></Rule>
    <priceRule v-show="showPriceRuleStatus" @showPriceRule="showPriceRule"></priceRule>
  </div>
</template>

<script>
import Rule from '../components/rule'
import storage from '../store/storage.js'
import priceRule from '../components/price-rule.vue'
import Guessing from '../components/guessing.vue'
import eliminate from '../components/eliminate.vue'
// 积分
import Integral from '../components/integral'
// 小礼品
import SmallGift from '../components/small-gift'
import XHR from '../api'
import toast from '../components/toast'
export default {
  data () {
    return {
      showResultStatus: false,
      showEliminateResult: false, // 显示淘汰赛弹窗
      showRuleStatus: false,
      showPriceRuleStatus: false,
      toastMsg: '',
      toastState: false,
      uid: 'ceshiceshi', // 用户openid
      // 当前选择品牌
      selectimg: {},
      // 选中当前车系标志
      selectIndex: null,
      // 选中所有的车系品牌下标
      selectIndexs: [],
      // 翻牌状态
      bettingStatus: 0,
      // 点击提交上锁
      lock: false,
      clickNum: 0,
      userinfo: {},
      whiteList: ['oq10u1bjVsiy276-ExPUrTbK0fQY', 'oq10u1RPuGvQDdFGA7XuWccR1MDU', 'oq10u1fDhu3rJMpRT-cTyPvYjVt4'],
      cards: {},
      // 设置选中球队
      selectObj: [],
      // 点击关闭第二次的时候提醒
      lockBetting: false
    }
  },
  components: {
    Rule,
    priceRule,
    toast,
    eliminate,
    Guessing,
    Integral,
    SmallGift
  },
  computed: {
    result () { return this.$store.state.selectObj },
    indexs () { return this.$store.state.indexs },
    MatchRes () { return this.$store.state.MatchRes }
  },
  created () {
    this.getWxconfig()
    this.hideshare()
    this.share()
    let userinfo = storage.get('userInfoWorldCup')
    if (userinfo) {
      this.userinfo = JSON.parse(userinfo)
    }
    this.getMatch()
    // this.userinfo.uid = 'oq10u1bjVsiy276-ExPUrTbK0fQY' // 测试
    // 清空状态管理
    this.$store.dispatch('initState')
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
    showToast (msg) {
      if (this.toastState) return
      this.toastMsg = msg
      this.toastState = true
      setTimeout(() => {
        this.toastState = false
      }, 2e3)
    },
    // 获取竞猜数据
    getMatch () {
      let json = {uid: this.userinfo.uid}
      XHR.getJingCai(json).then(res => {
        let {status, data, token} = res.data
        if (!status && token) {
          data.token = token
          this.cards = data
        } else {
          this.showToast(data.errMsg)
        }
      })
    },
    stroageTeams (data) {
      let teams = storage.get('teams')
      if (teams) {
        teams = JSON.parse(teams)
        teams.forEach(element => {
          if (element.round !== data.round) {
            teams.push(data)
            storage.set('teams', teams)
          }
        })
      } else {
        let team = []
        team.push(data)
        storage.set('teams', team)
      }
    },
    // 显示奖项
    /*
      如果没有点击过翻牌 bettingStatus为false代表洗牌第一次点击把洗牌更改为确定
      翻牌以后设置当前选择的图片
    */
    showResult (item, index) {
      //  如果是淘汰赛走下面的方法
      if (this.cards.type === 2) {
        this.showEliminate(item, index)
        return
      }

      //  如果是正常比赛走下面
      if (item === '取消') {
        this.showResultStatus = !this.showResultStatus
        let index = this.selectIndexs.indexOf(this.selectIndex)
        this.selectIndexs.splice(index, 1)
        return
      }
      let periods = storage.get('periods')
      if (periods && periods === this.cards.round && this.whiteList.indexOf(this.userinfo.uid) < 0) {
        this.showToast('每人每轮只能提交一次')
        return
      }
      if (this.result.length > 2) {
        this.showToast('每人每轮只能选择三次')
        return
      }
      if (index) {
        if (this.selectIndexs.indexOf(index) > -1) {
          return
        }
        this.selectIndex = index
        this.selectIndexs.push(index)
        if (!this.clickNum) {
          this.clickNum = 1
        } else {
          this.clickNum++
        }
      }
      this.showResultStatus = !this.showResultStatus
      if (item) {
        this.selectimg = item
      }
    },
    showEliminate (item, index) {
      let closeNum = this.getCookie('closeNum') ? this.getCookie('closeNum') : 0
      let isFlop = this.getCookie('isFlop')
      if (isFlop) {
        this.showToast('今天已翻牌并提交，请明天再来')
        return
      }
      if (item === '取消') { // 执行关闭做的操作
        if (closeNum == 2 && !this.lockBetting) {
          this.lockBetting = true
          this.showToast('每天仅有三次翻牌机会哦，您已经翻牌两次了')
          return
        }
        this.showEliminateResult = !this.showEliminateResult
        let index = this.selectIndexs.indexOf(this.selectIndex)
        this.selectIndexs.splice(index, 1)
        this.getMatch()
        return
      }
      if (closeNum >= 3) { // 今天翻牌次数用完
        this.showToast('今天翻牌机会已用完')
        return
      }
      let periods = storage.get('periods')
      if (periods && periods === this.cards.round && this.whiteList.indexOf(this.userinfo.uid) < 0) {
        this.showToast('每人每轮只能提交一次')
        return
      }
      if (this.result.length > 2) {
        this.showToast('每人每轮只能选择三次')
        return
      }
      if (index || index === 0) {
        closeNum++
        this.setCookie('closeNum', closeNum)
        if (this.selectIndexs.indexOf(index) > -1) {
          return
        }
        this.selectIndex = index
        this.selectIndexs.push(index)
        if (!this.clickNum) {
          this.clickNum = 1
        } else {
          this.clickNum++
        }
      }
      this.showEliminateResult = !this.showEliminateResult
      if (item) {
        this.selectimg = item
      }
    },
    // 洗牌或提交
    again () {
      if (!this.bettingStatus) {
        ga('send', 'event', '点击洗牌', '世界杯活动', this.userinfo.nickname)
        this.getMatch()
      } else {
        ga('send', 'event', '点击确定', `用户点击了${this.clickNum}次九宫格`, this.userinfo.nickname)
        if (this.result.length === 1 && !this.lock) {
          this.showToast('您只投注了一场比赛，最多可投注三场比赛')
          this.lock = true
        } else {
          this.jump(`/BettingOk/${this.userinfo.uid}/${this.cards.type}/${this.cards.round}`)
        }
        // 测试
        // this.jump(`/BettingOk/sadsd/${this.cards.type}/${this.cards.round}`)
      }
    },
    select (json, type) {
      // 设置翻牌的下标
      json.index = this.selectIndex
      try {
        storage.set('selectObj', json)
      } catch (error) {

      }
      this.selectObj.push(json)
      this.$store.dispatch('selectObjFun', json)
      if (!this.bettingStatus) {
        this.bettingStatus = 1
      }
      if (this.cards.type === 2) {
        this.$store.dispatch('setGifts', this.cards)
        this.jump(`/BettingOk/${this.userinfo.uid}/${this.cards.type}/${this.cards.round}`)
      }
    },
    // 淘汰赛提交
    submit (json) {
      json = {...this.cards, ...json}
      this.$store.dispatch('setGifts', json)
      this.showEliminateResult = !this.showEliminateResult
      this.jump(`/BettingOk/${this.userinfo.uid}/${this.cards.type}/${this.cards.round}`)
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
    background: url('https://img5.168trucker.com/topic/images/worldCup/bg-three.jpg') 50% 50% no-repeat;
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
        background: url('https://img5.168trucker.com/topic/images/worldCup/rule-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 251px;
        height: 143px;
        margin-left: 20px;
      }
      .home{
        background: url('https://img5.168trucker.com/topic/images/worldCup/back-home.png') 50% 50% no-repeat;
        background-size: cover;
        width: 198px;
        height: 131px;
        margin-top: 18px;
      }
      .price-btn{
        background: url('https://img5.168trucker.com/topic/images/worldCup/price-set.png') 50% 50% no-repeat;
        background-size: cover;
        width: 249px;
        height: 141px;
        margin-top: 3px;
      }
    }
    .table{
      width: 696px;
      height: 696px;
      background: url('https://img5.168trucker.com/topic/images/worldCup/table.png') no-repeat;
      margin: 25px auto 0;
      padding: 45px;
      box-sizing: border-box;
      position: relative;
      .card{
        width: 201px;
        height: 201px;
        background: url('https://img5.168trucker.com/topic/images/worldCup/card-card.png') no-repeat;
        float: left;
        position: relative;
        &:nth-child(4){
          margin-right: 201px;
        }
        figure{
          margin:10px auto;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            border-radius: 50%;
            width: 138px;
            height: 138px;
            border:2px solid #b18438;
            object-fit: cover;
          }
        }
        .defalt{
          width: 180px;
          height: 180px;
          &::before{
            content: '';
            display: block;
            position: absolute;
            width: 180px;
            height: 180px;
            z-index: -1;
            top: 0px;
            left:0px;
            /*! autoprefixer: off */
               -webkit-backface-visibility: hidden;
                -webkit-transform-style: preserve-3d;
            /* autoprefixer: on */
            animation:cicle 5s linear infinite;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
          }
          &.level1:before{
            background: url('https://img5.168trucker.com/topic/images/worldCup/level1.png') 50% 50%;
            background-size: cover;
          }
          &.level2:before{
            background: url('https://img5.168trucker.com/topic/images/worldCup/level2.png') 50% 50%;
            background-size: cover;
          }
          &.level3:before{
            background: url('https://img5.168trucker.com/topic/images/worldCup/level3.png') 50% 50%;
            background-size: cover;
          }
        }
        .result{
          position: absolute;
          z-index: 1;
          left: 0;
          top:0;
          width: 100%;
          height: 100%;
          background: url('https://img5.168trucker.com/topic/images/worldCup/turn-bg.png') no-repeat;
          figure{
            width: 96px;
            height: 96px;
            position: absolute;
            left: 38px;
            top:2px;
            img{
              border:2px solid #fff;
              margin-top: 30px;
              width: 96px;
              height: 96px;
               border:2px solid #fff;
               border-radius: 50%;
            }
          }
          &:after{
            position: absolute;
            z-index: -1;
            right: 30px;
            bottom: 35px;
            width:65px;
            height:65px;
            display: block;
            content: attr(total);
            background: #ffc826;
            border:2px solid #fff;
            border-radius: 50%;
            color: #fff;
            font-size: 40px;
            line-height: 65px;
            text-align: center;
          }
        }
      }
      .table-btn,.submit{
        position: absolute;
        left: 246px;
        top:246px;
        width: 201px;
        height: 201px;
        background: url('https://img5.168trucker.com/topic/images/worldCup/again.png') no-repeat;
      }
      .submit{
        background: url('https://img5.168trucker.com/topic/images/worldCup/ok.png') no-repeat;
      }
    }
  }
</style>
