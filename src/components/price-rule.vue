<template>
<transition name="fade">
  <div class="rule-pop">
    <div class="flex"></div>
    <div class="rule-main">
      <!-- 关闭 -->
      <div class="close"  @click="showRule"></div>
      <h3 class="title">奖项设置</h3>
      <div class="price">
        <figure>
          <img src="https://img5.168trucker.com/topic/images/worldCup/price1.png" alt="">
        </figure>
        <h5>一等奖：共3名</h5>
        <span class="des">取积分榜前3名, 55寸智能液晶电视</span>
      </div>
      <div class="price-box">
        <div class="price">
          <figure>
            <img src="https://img5.168trucker.com/topic/images/worldCup/price2.png" alt="">
          </figure>
          <h5>二等奖：共5名</h5>
          <span class="des">取积分榜4-8名<br>锤子新一代智能手机</span>
        </div>
        <div class="price">
          <figure>
            <img src="https://img5.168trucker.com/topic/images/worldCup/price3.png" alt="">
          </figure>
           <h5>三等奖：共10名</h5>
           <span class="des">取积分榜9-18名<br>奔驰车载蓝牙音箱</span>
        </div>
      </div>
      <div class="price last">
          <h5>幸运奖：若干 </h5>
          <span class="des">活动结束到大转盘界面，消耗积分抽取</span>
      </div>
      <button class="know" @click="showRule">我知道了</button>
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
      this.$emit('showPriceRule')
    }
  }
}
</script>

<style scoped lang="less">
@yellow: #fff948;
  .rule-pop{
    position: fixed;
    z-index: 1000;
    top:0;
    width: 100%;
    height: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    z-index: 100;
    background: rgba(0, 0, 0, 0.69);
  }
  .flex{
    flex: 1;
  }
  .rule-main{
    margin:150px 30px 0;
    position: relative;
    width: 690px;
    background: url('https://img5.168trucker.com/topic/images/worldCup/model-bg.png') no-repeat;
    height: 1058px;
    .close{
      width: 88px;
      height: 111px;
      position: absolute;
      top:-111px;
      right: 36px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABvCAMAAABfNPcTAAAAtFBMVEUAAAAAAACEvU5EYShCXieGv0+Gv08THAtIZyqGv09/tEqGv0+Gv08lNRaGv0+Gv0+Gv09ijTqGv09yo0OGv09agTVSdTANEwiGv0+Gv094rEdnkzwhLxMdKhGGv0+FvU6Gv09fiDhXfTOGv0+Gv0+Gv080Sh6Du02Gv0+Gv0+Gv096rkh6r0hqlz4GCQOGv0+Gv08+WCQ3TiCGv0+Gv0+Gv0+Gv0+AuEx0pkRtnECGv0+Gv09Oz3LYAAAAO3RSTlOAAP2sqgIGirDM8+2jlYPz3soy38TBuYdkLenQkZCL+9bHv65cIZ/65XhQ6+vUg3BXp6Ep5ruJ9uLYuj2re2IAAAO+SURBVGje7dnpUuJAEADgRpxJCBAgyyn3qaAghzfv/16bHtB2GaAbwrJuFf3DUmvyQU16rh6IsaEqUz+VbyUzy2Yy28qn/GlF8U8BgwbD58zSiszzMFAR4L6fXe6MrN8/Dta9/JKJfE8fDOsyfdn7cccdpJ0STJxaeuB2xvf0tcv6IFiV79ZPerl4CawoxXPeusFdWcnhILF+6s2dwI6YuG/rRolACOuXpnngtpCGvZEu3JqGzYaWwP3EqnWhBmzUCs3Vl+7z8ChpmrYNK6DbpnlyxMDKN+1uXBCHe2Me8dU+WKVMoyocFFXzUErthnXXNCnCgVE0j3X1LlgZ9yEOB8f8wcjKhqkfftXhiKj/ot6wYN+4DhwVjpFftsFT3uXlqQ0vMjjd1OHoqGPaZRabsG7hB8YhQsRRaOkNuMHkmTjrGn/CAf4vBxEjh0rwHVYJHMcQObCbE+obXMaPcqPDLjplgjWuF204QbRxTdFf8CNO67VTwDWc+h8/Yf0U/tWx3nF1zjEz73UzQTsh9aTXcA8XTcfOnSsmra+vlsvXzQGIi2xvDWNKFOxJFmXGtWEoYGKs4AoS1ro5uDIy417NrBUW/10xcGP72Ijbsu1ebx8lDYRVliYJRmZcmjKyKgamJzwARmZdCnx9QQgPqScYmXWpL4Yh/EE9wcisS33xEQOFE3wJOFnuQgknfAULXDgAOJl3Ke4x4QCH3Rh4We7CGAcf+DRPcDLv0nzhQ4reHSfzLr29FOBBYwASWerCAI8ngKtzGkSy0IU0rtaA22EHZLLMBQc3zEBpzMu8S4kMyzAAZLLMhZWJh4iJUCaXh/k+pvylrJN0Bc7GdalLMv/y+HSj/KV85tPNDJC5zL2Ok8wPEBzSrswFkMmuGdK4gLSFrlBu4xICo/Dnu8yVyu9hk5GZ6B9ErljGs9kCFCUy5/IyZZuCWJfeHuOyMk3H3RiYPWyOd+VyDneytGHhXLns4VpKWyzGFcq0xaJNIe/yMm0KaRvLu7xM29g9G2+YkSuUaeO976gAHrl75MHOowIdbmwYXUaubj3c7D2OzTxvxq9WxW3HscgHyHm1uPUA+beOvOc4pMcCrtwmL8AF5ymExHTiNKWbhCZ4Ff0kdnPUYlOyb5fHRqcoj422FfReTl3QO30J8vRF07OVeUmOUpjW5y2lRy/+y68r6oJkEFxXUOhGpAuW6FdC1a8roX9/ibXr2g1Kjn3t9lMuCkVXmz/vMnbj+jgEk9Gvj+3Ar/r5+wW+wBf4Al/gC3yB/1/4N4lOP719BVu/AAAAAElFTkSuQmCC) no-repeat 50% 50%;
    }
    .title{
      margin:60px auto 30px;
      background: url('https://img5.168trucker.com/topic/images/worldCup/price-title.png') 50% 50%;
      background-size: cover;
      width: 350px;
      height: 88px;
      font-size: 0;
    }
    .price-box{
      display: flex;
      padding: 0 30px;
    }
    .price{
      flex:1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      figure{
        display: block;
      }
      h5{
        padding: 9px 0 10px;
        line-height: 35px;
        font-size: 35px;
        color: @yellow;
      }
      .des{
        font-size: 24px;
        line-height: 32px;
        color: #fff;
        margin-bottom: 20px;
        width: 100%;
        text-align: center;
      }
      &.last{
         h5{
          padding-bottom: 0;
        }
        .des{
          margin-bottom: 0;
        }
      }
    }
    .know{
      margin:30px auto 0;
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
