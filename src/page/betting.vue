<template>
  <div class="waaper">
    <header>
      <img src="http://img5.168trucker.com/topic/images/worldCup/banner1.png" alt="">
      <div class="footer">
        <span class="rule" @click="showRule">活动规则</span>
        <span class="home" @click="tohome">会主页</span>
        <span class="price-btn" @click="showPriceRule">奖项设置</span>
      </div>
      <div class="table">
          <div class="card" @click="showResult(item,ind)" v-for="(item ,ind) in cards.imgs" :key="ind">
            <!-- 默认卡牌 -->
            <figure class="defalt"><img :src="item" alt=""></figure>
            <div class="result" :total="items.type" v-for="items in result" v-if="items.index == ind" :key="items.id">
              <figure><img :src="items.team_A_logo" alt=""></figure>
            </div>
          </div>
          <div :class="[bettingStatus?'submit':'table-btn']" @click="again"></div>
      </div>
    </header>
    <!-- 翻牌结果 -->
    <Guessing 
      v-if="showResultStatus" 
      :selectObj = "selectimg"
      :matchList="cards.matchList"
      @showResult="showResult"
      @select="select">
    </Guessing>

    <Rule v-show="showRuleStatus" @showRule="showRule"></Rule>
    <priceRule v-show="showPriceRuleStatus" @showPriceRule="showPriceRule"></priceRule>
  </div>
</template>

<script>
import Rule from '../components/rule'
import priceRule from '../components/price-rule.vue'
import Guessing from '../components/guessing.vue'
export default {
  data () {
    return {
      showResultStatus: false,
      showRuleStatus: false,
      showPriceRuleStatus: false,
      // 当前选择品牌
      selectimg: {},
      selectIndex:null,
      // 翻牌状态
      bettingStatus:0,
      cards: {
        'imgs': [
          'http://img5.168trucker.com/worldcup/1/1-1/1.png!600',
          'http://img5.168trucker.com/worldcup/1/1-1/1.png!600',
          'http://img5.168trucker.com/worldcup/1/1-1/1.png!600',
          'http://img5.168trucker.com/worldcup/1/1-1/1.png!600',
          'http://img5.168trucker.com/worldcup/1/1-1/1.png!600',
          'http://img5.168trucker.com/worldcup/1/1-1/1.png!600',
          'http://img5.168trucker.com/worldcup/1/1-1/1.png!600',
          'http://img5.168trucker.com/worldcup/1/1-1/1.png!600'
        ],
        'matchList': [
          {
            'team_A_name': '俄罗斯',
            'team_A_logo': 'https://img.dongqiudi.com/data/pic/1878.png',
            'team_B_name': '沙特阿拉伯',
            'team_B_logo': 'https://img.dongqiudi.com/data/pic/1897.png',
            'sort_timestamp': 1528959600000,
            'fs_A': null,
            'fs_B': null,
            'date_utc': '2018-06-14',
            'round_name': '小组赛'
          },
          {
            'team_A_name': '埃及',
            'team_A_logo': 'https://img.dongqiudi.com/data/pic/658.png',
            'team_B_name': '乌拉圭',
            'team_B_logo': 'https://img.dongqiudi.com/data/pic/2300.png',
            'sort_timestamp': 1529035200000,
            'fs_A': null,
            'fs_B': null,
            'date_utc': '2018-06-15',
            'round_name': '小组赛'
          },
          {
            'team_A_name': '摩洛哥',
            'team_A_logo': 'https://img.dongqiudi.com/data/pic/1509.png',
            'team_B_name': '伊朗',
            'team_B_logo': 'https://img.dongqiudi.com/data/pic/1178.png',
            'sort_timestamp': 1529046000000,
            'fs_A': null,
            'fs_B': null,
            'date_utc': '2018-06-15',
            'round_name': '小组赛'
          }
        ]
      }
    }
  },
  components: {
    Rule,
    priceRule,
    Guessing
  },
  computed: {
    result () { return this.$store.state.selectObj },
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
    // 显示奖项
    /*
      如果没有点击过翻牌 bettingStatus为false代表洗牌第一次点击把洗牌更改为确定
      翻牌以后设置当前选择的图片
    */
    showResult (img,index) {
      if(this.result.length>2){
        alert('没人每轮只能选择三次')
        return
      }
      this.showResultStatus = !this.showResultStatus
      if(img){
        this.selectimg = img
      }
      if(index){
        this.selectIndex = index
      }
    },

    // 洗牌或提交
    again(){
      if(!this.bettingStatus){
        console.log('洗牌');
      }else{
        console.log('提交');
        this.jump('/BettingOk')
      }
    },
    select(json){
      json.index= this.selectIndex
      this.$store.dispatch('selectObjFun', json)
      if(!this.bettingStatus){
        this.bettingStatus = 1
      }
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
    background: url('http://img5.168trucker.com/topic/images/worldCup/bg-three.jpg') 50% 50% no-repeat;
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
        background: url('http://img5.168trucker.com/topic/images/worldCup/rule-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 251px;
        height: 143px;
        margin-left: 20px;
      }
      .home{
        background: url('http://img5.168trucker.com/topic/images/worldCup/back-home.png') 50% 50% no-repeat;
        background-size: cover;
        width: 198px;
        height: 131px;
        margin-top: 18px;
      }
      .price-btn{
        background: url('http://img5.168trucker.com/topic/images/worldCup/price-set.png') 50% 50% no-repeat;
        background-size: cover;
        width: 249px;
        height: 141px;
        margin-top: 3px;
      }
    }
    .table{
      width: 696px;
      height: 696px;
      background: url('http://img5.168trucker.com/topic/images/worldCup/table.png') no-repeat;
      margin: 25px auto 0;
      padding: 45px;
      box-sizing: border-box;
      position: relative;
      .card{
        width: 201px;
        height: 201px;
        background: url('http://img5.168trucker.com/topic/images/worldCup/card-card.png') no-repeat;
        float: left;
        position: relative;
        &:nth-child(4){
          margin-right: 201px;
        }
        figure{
          border-radius: 50%;
          margin:30px auto;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .defalt{
          width: 138px;
          height: 138px;
          border:2px solid #b18438;
        }
        .result{
          position: absolute;
          z-index: 1;
          left: 0;
          top:0;
          width: 100%;
          height: 100%;
          background: url('http://img5.168trucker.com/topic/images/worldCup/turn-bg.png') no-repeat;
          figure{
            width: 96px;
            height: 96px;
            position: absolute;
            left: 38px;
            top:2px;
            background: #fff;
            border:2px solid #fff;
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
        background: url('http://img5.168trucker.com/topic/images/worldCup/again.png') no-repeat;
      }
      .submit{
        background: url('http://img5.168trucker.com/topic/images/worldCup/ok.png') no-repeat;
      }
    }
  }
</style>
