<template>
<transition name="fade">
  <div class="rule-pop">
    <div class="flex"></div>
    <div class="rule-main">
      <div class="main">
      <!-- 关闭 -->
      <div class="close"  @click="showRotice"></div>
      <h3 class="title">公告</h3>
      <p>尊敬的用户您好，感谢大家对卡车世界杯活动的大力支持，随着赛事如火如荼的进行，我们的活动也会给大家带来更多的福利；</p>
      <p>在淘汰赛阶段，大家不仅可以猜比赛的胜负，我们还为大家准备了随机额度的积分和小礼品，在这期间您可以直接抽到不同数额的积分和丰富多彩的各种礼品，如车模，音箱，球衣等；</p>
      <p>正式活动将于世界杯淘汰赛首场比赛开始后(2018年6月30日22:00)进行开放，这期间您可以登录体验，但是中奖结果将不被记录；</p>
      <p>再次感谢大家对本活动的支持，祝大家游戏愉快~</p>
      <p>本活动最终解释权归卡车e族所有</p>
      <button class="know" @click="showRotice">我知道了</button>
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
    showRotice () {
      this.$emit('showRotice')
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
      box-sizing: border-box;
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
      background: url('https://img5.168trucker.com/topic/images/worldCup/field.png') 50% 50%;
      background-size: cover;
      width: 350px;
      height: 88px;
      font-size: 48px;
      line-height: 88px;
      text-align: center;
      color: rgb(255, 249, 72);
      text-shadow: 0px 1px 0px rgba(55, 115, 32, 0.75);
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
