<template>
<transition name="fade">
  <div class="rule-pop">
    <div class="flex"></div>
    <div class="rule-main">
      <div class="main">
      <!-- 关闭 -->
      <div class="close"  @click="showRule"></div>
      <h3 class="title">活动规则</h3>
      <p>1.活动时间：2018.6.14-2018.7.15</p>
      <p>2.公布竞猜结果：每三天公布一次，请关注“卡车e族顶级俱乐部”。</p>
      <p> 3.活动规则及玩法：</p>
      <p>
        世界杯期间，根据每天比赛，竞猜获胜队伍。八个车型每个车型随机对应一支比赛球队，自由选择车型（球队）预测赛果：
      </p>
      <p>
        <em>小组赛：</em> 每次可选择竞猜1到3支球队，揭晓比赛结果，猜中获得3或10或20积分。猜错任意一支球队，概不得分。
      </p>
      <p>
        <img src="../assets/rule.png" alt="">
      </p>
      <p>
        <em>淘汰赛：</em> 任意翻牌，翻开为球队竞猜，可选择一支球队竞猜猜对得10分，猜错不得分；翻开为礼品或积分，直接获得奖励。
      </p>
      <p>
        将活动分享到朋友圈得1积分。注：每人每天仅一次竞猜机会。请填写真实信息，以便为您寄出奖品。4.奖品邮寄：世界杯活动结束后一个月内寄出。
      </p>
      <p>如出现排名相同的情况，则第一次进入活动时间早的用户排名靠前</p>
      <p>本活动最终解释权归卡车e族所有</p>
      <button class="know" @click="showRule">我知道了</button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    showRule () {
      this.$emit('showRule')
    }
  }
}
</script>

<style scoped lang="less">
  .rule-pop{
    position: fixed;
    z-index: 1000;
    top:0;
    width: 100%;
    height: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.69);
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 100;
  }
  .flex{
    flex: 1;
  }
  .rule-main{
    margin:150px 30px 0;
    position: relative;
    width: 690px;
    background: url('https://img5.168trucker.com/topic/images/worldCup/model-bg.png');
    height: 1058px;
      overflow: visible;
    .main{
      -webkit-overflow-scrolling: touch;
      overflow-y: auto;
      height: 1028px;
      margin-top: 30px;
      padding-bottom: 30px;
    }
    .close{
      width: 88px;
      height: 111px;
      position: absolute;
      top:-111px;
      right: 36px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABvCAMAAABfNPcTAAAAtFBMVEUAAAAAAACEvU5EYShCXieGv0+Gv08THAtIZyqGv09/tEqGv0+Gv08lNRaGv0+Gv0+Gv09ijTqGv09yo0OGv09agTVSdTANEwiGv0+Gv094rEdnkzwhLxMdKhGGv0+FvU6Gv09fiDhXfTOGv0+Gv0+Gv080Sh6Du02Gv0+Gv0+Gv096rkh6r0hqlz4GCQOGv0+Gv08+WCQ3TiCGv0+Gv0+Gv0+Gv0+AuEx0pkRtnECGv0+Gv09Oz3LYAAAAO3RSTlOAAP2sqgIGirDM8+2jlYPz3soy38TBuYdkLenQkZCL+9bHv65cIZ/65XhQ6+vUg3BXp6Ep5ruJ9uLYuj2re2IAAAO+SURBVGje7dnpUuJAEADgRpxJCBAgyyn3qaAghzfv/16bHtB2GaAbwrJuFf3DUmvyQU16rh6IsaEqUz+VbyUzy2Yy28qn/GlF8U8BgwbD58zSiszzMFAR4L6fXe6MrN8/Dta9/JKJfE8fDOsyfdn7cccdpJ0STJxaeuB2xvf0tcv6IFiV79ZPerl4CawoxXPeusFdWcnhILF+6s2dwI6YuG/rRolACOuXpnngtpCGvZEu3JqGzYaWwP3EqnWhBmzUCs3Vl+7z8ChpmrYNK6DbpnlyxMDKN+1uXBCHe2Me8dU+WKVMoyocFFXzUErthnXXNCnCgVE0j3X1LlgZ9yEOB8f8wcjKhqkfftXhiKj/ot6wYN+4DhwVjpFftsFT3uXlqQ0vMjjd1OHoqGPaZRabsG7hB8YhQsRRaOkNuMHkmTjrGn/CAf4vBxEjh0rwHVYJHMcQObCbE+obXMaPcqPDLjplgjWuF204QbRxTdFf8CNO67VTwDWc+h8/Yf0U/tWx3nF1zjEz73UzQTsh9aTXcA8XTcfOnSsmra+vlsvXzQGIi2xvDWNKFOxJFmXGtWEoYGKs4AoS1ro5uDIy417NrBUW/10xcGP72Ijbsu1ebx8lDYRVliYJRmZcmjKyKgamJzwARmZdCnx9QQgPqScYmXWpL4Yh/EE9wcisS33xEQOFE3wJOFnuQgknfAULXDgAOJl3Ke4x4QCH3Rh4We7CGAcf+DRPcDLv0nzhQ4reHSfzLr29FOBBYwASWerCAI8ngKtzGkSy0IU0rtaA22EHZLLMBQc3zEBpzMu8S4kMyzAAZLLMhZWJh4iJUCaXh/k+pvylrJN0Bc7GdalLMv/y+HSj/KV85tPNDJC5zL2Ok8wPEBzSrswFkMmuGdK4gLSFrlBu4xICo/Dnu8yVyu9hk5GZ6B9ErljGs9kCFCUy5/IyZZuCWJfeHuOyMk3H3RiYPWyOd+VyDneytGHhXLns4VpKWyzGFcq0xaJNIe/yMm0KaRvLu7xM29g9G2+YkSuUaeO976gAHrl75MHOowIdbmwYXUaubj3c7D2OzTxvxq9WxW3HscgHyHm1uPUA+beOvOc4pMcCrtwmL8AF5ymExHTiNKWbhCZ4Ff0kdnPUYlOyb5fHRqcoj422FfReTl3QO30J8vRF07OVeUmOUpjW5y2lRy/+y68r6oJkEFxXUOhGpAuW6FdC1a8roX9/ibXr2g1Kjn3t9lMuCkVXmz/vMnbj+jgEk9Gvj+3Ar/r5+wW+wBf4Al/gC3yB/1/4N4lOP719BVu/AAAAAElFTkSuQmCC) no-repeat 50% 50%;
    }
    .title{
      margin:30px auto;
      background: url('https://img5.168trucker.com/topic/images/worldCup/rule-title.png') 50% 50%;
      background-size: cover;
      width: 350px;
      height: 88px;
      font-size: 0;
    }
    p{
      padding: 0 55px 0 48px;
      color: #fff;
      font-size: 28px;
      line-height: 36px;
      text-align: justify;
      margin-top: 15px;
      img{
        width: 100%;
      }
      em{
        font-size: 36px;
      }
    }
    .know{
      margin:30px auto;
      background: url('https://img5.168trucker.com/topic/images/worldCup/know.png') 50% 50%;
      background-size: cover;
      width: 320px;
      height: 96px;
      display: block;
      font-size: 0;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: transform .5s;
     transform: translate(0, 0);
  }
  .fade-enter, .fade-leave-active {
    transform: translate(0, 100%);
  }
</style>
