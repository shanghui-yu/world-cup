<template>
<transition name="fade">
  <div class="pop">
   <div class="close"  @click="showEliminate"></div>
   <div class="main">
     <div class="img-box">
       <div :class="['fileinY',flipInY?'hide':'',showPrice?'none':'']">
         <img :src="`${selectObj.url}!300`" alt="" >
       </div>

      <div :class="['resultImg',showPrice?'show':'']">
        <figure>
          <img :src="`https://img5.168trucker.com${integralShoper.img}`" alt="" >
        </figure>
      </div>
    </div>
    <span class="name" v-if="!showPrice">夺取中....</span>
    <span class="des" v-if="!showPrice">幸运女神降临，您将有机会直接获得礼品或积分</span>
    <span class="name" v-if="showPrice">{{cards.integral}}积分</span>
    <span class="des" v-if="showPrice">恭喜您中奖了，{{integralShoper.name}}送您{{cards.integral}}积分</span>
   </div>
    <div :class="['footer',showPrice?'show':'']">
     <button class="submit" @click="submit">确定</button>
   </div>
  </div>
</transition>
</template>

<script>
export default {
  props: ['selectObj', 'cards'],
  data () {
    return {
      // 翻牌
      flipInY: 0,
      // 显示结果
      showPrice: 0,
      integralShoper: {
        img: '',
        name: ''
      },
      imgs10: [
        {
          img: '/brand_logos/10/1.png',
          name: '福田瑞沃'
        },
        {
          img: '/brand_logos/10/2.png',
          name: '福田时代'
        }
      ],
      imgs5: [
        {
          img: '/brand_logos/5/1.png',
          name: '东风商用车'
        },
        {
          img: '/brand_logos/5/2.png',
          name: '联合卡车'
        },
        {
          img: '/brand_logos/5/3.png',
          name: '上汽跃进'
        }
      ],
      imgs3: [
        {
          img: '/brand_logos/3/1.png',
          name: '福田戴姆勒'
        },
        {
          img: '/brand_logos/3/2.png',
          name: '奔驰卡车'
        },
        {
          img: '/brand_logos/3/3.png',
          name: '飞碟汽车'
        },
        {
          img: '/brand_logos/3/4.png',
          name: '一汽解放'
        },
        {
          img: '/brand_logos/3/5.png',
          name: '广汽日野'
        }
      ]
    }
  },
  computed: {
    indexs () { return this.$store.state.indexs }
  },
  created () {
    this.random()
  },
  mounted () {
    let time1 = setTimeout(() => {
      this.flipInY = 1
      time1 && clearTimeout(time1)
      let time2 = setTimeout(() => {
        this.showPrice = 1
        time2 && clearTimeout(time2)
      }, 500)
    }, 1500)
  },
  methods: {
    showEliminate () {
      this.$emit('showEliminate', '取消')
    },
    submit (e) {
      this.$emit('submit', this.integralShoper)
    },
    random () {
      switch (this.cards.integral) {
        case 20:
          this.integralShoper = {img: '/brand_logos/20/1.png', name: '江淮格尔发'}
          break
        case 10:
          let in10 = this.fRandomBy(0, 1)
          this.integralShoper = this.imgs10[in10]
          break
        case 5:
          let index = this.fRandomBy(0, 2)
          this.integralShoper = this.imgs5[index]
          break
        case 3:
          let i = this.fRandomBy(0, 4)
          this.integralShoper = this.imgs3[i]
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped lang="less">
  .pop{
    position: fixed;
    z-index: 1000;
    top:0;
    width: 100%;
    height: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.69);
    display: flex;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    align-items: center;
    z-index: 100;
    .close{
      width: 88px;
      height: 176px;
      top:50px;
      right: 36px;
      position: absolute;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABvCAMAAABfNPcTAAAAtFBMVEUAAAAAAACEvU5EYShCXieGv0+Gv08THAtIZyqGv09/tEqGv0+Gv08lNRaGv0+Gv0+Gv09ijTqGv09yo0OGv09agTVSdTANEwiGv0+Gv094rEdnkzwhLxMdKhGGv0+FvU6Gv09fiDhXfTOGv0+Gv0+Gv080Sh6Du02Gv0+Gv0+Gv096rkh6r0hqlz4GCQOGv0+Gv08+WCQ3TiCGv0+Gv0+Gv0+Gv0+AuEx0pkRtnECGv0+Gv09Oz3LYAAAAO3RSTlOAAP2sqgIGirDM8+2jlYPz3soy38TBuYdkLenQkZCL+9bHv65cIZ/65XhQ6+vUg3BXp6Ep5ruJ9uLYuj2re2IAAAO+SURBVGje7dnpUuJAEADgRpxJCBAgyyn3qaAghzfv/16bHtB2GaAbwrJuFf3DUmvyQU16rh6IsaEqUz+VbyUzy2Yy28qn/GlF8U8BgwbD58zSiszzMFAR4L6fXe6MrN8/Dta9/JKJfE8fDOsyfdn7cccdpJ0STJxaeuB2xvf0tcv6IFiV79ZPerl4CawoxXPeusFdWcnhILF+6s2dwI6YuG/rRolACOuXpnngtpCGvZEu3JqGzYaWwP3EqnWhBmzUCs3Vl+7z8ChpmrYNK6DbpnlyxMDKN+1uXBCHe2Me8dU+WKVMoyocFFXzUErthnXXNCnCgVE0j3X1LlgZ9yEOB8f8wcjKhqkfftXhiKj/ot6wYN+4DhwVjpFftsFT3uXlqQ0vMjjd1OHoqGPaZRabsG7hB8YhQsRRaOkNuMHkmTjrGn/CAf4vBxEjh0rwHVYJHMcQObCbE+obXMaPcqPDLjplgjWuF204QbRxTdFf8CNO67VTwDWc+h8/Yf0U/tWx3nF1zjEz73UzQTsh9aTXcA8XTcfOnSsmra+vlsvXzQGIi2xvDWNKFOxJFmXGtWEoYGKs4AoS1ro5uDIy417NrBUW/10xcGP72Ijbsu1ebx8lDYRVliYJRmZcmjKyKgamJzwARmZdCnx9QQgPqScYmXWpL4Yh/EE9wcisS33xEQOFE3wJOFnuQgknfAULXDgAOJl3Ke4x4QCH3Rh4We7CGAcf+DRPcDLv0nzhQ4reHSfzLr29FOBBYwASWerCAI8ngKtzGkSy0IU0rtaA22EHZLLMBQc3zEBpzMu8S4kMyzAAZLLMhZWJh4iJUCaXh/k+pvylrJN0Bc7GdalLMv/y+HSj/KV85tPNDJC5zL2Ok8wPEBzSrswFkMmuGdK4gLSFrlBu4xICo/Dnu8yVyu9hk5GZ6B9ErljGs9kCFCUy5/IyZZuCWJfeHuOyMk3H3RiYPWyOd+VyDneytGHhXLns4VpKWyzGFcq0xaJNIe/yMm0KaRvLu7xM29g9G2+YkSuUaeO976gAHrl75MHOowIdbmwYXUaubj3c7D2OzTxvxq9WxW3HscgHyHm1uPUA+beOvOc4pMcCrtwmL8AF5ymExHTiNKWbhCZ4Ff0kdnPUYlOyb5fHRqcoj422FfReTl3QO30J8vRF07OVeUmOUpjW5y2lRy/+y68r6oJkEFxXUOhGpAuW6FdC1a8roX9/ibXr2g1Kjn3t9lMuCkVXmz/vMnbj+jgEk9Gvj+3Ar/r5+wW+wBf4Al/gC3yB/1/4N4lOP719BVu/AAAAAElFTkSuQmCC) no-repeat top;
      &::after{
        content: '';
        height: 65px;
        width: 4px;
        background: #86bf4f;
        position: absolute;
        top: 110px;
        left: 42px;
      }
    }
  }
  .main{
    width: 611px;
    height: 612px;
    background: url('https://img5.168trucker.com/topic/images/worldCup/model-main.png') no-repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    margin-top: 225px;
    .img-box{
      width: 320px;
      height: 320px;
      margin:54px auto 30px;
      text-align: center;
      position: relative;
      img{
        border:1px solid #fff;
        border-radius: 50%;
        overflow: hidden;
        width: 320px;
        height: 320px;
        object-fit: cover;
      }
      .resultImg{
        display: inline-block;
        transform: translate3d(0,0,0);
        transform: scaleX(0);
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 320px;
        height: 320px;
        overflow: hidden;
        figure{
          width: 320px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          img{
            width: 320px;
            height: 320px;
            border:1px solid #fff;
            border-radius: 50%;
            overflow: hidden;
          }
        }
        &.show{
          transform: scaleX(1);
        }
      }
      .fileinY{
        transform: scaleX(1);
        transition: all 0.5s ease;
        &.hide{
          transform: scaleX(0);
        }
        &.none{
          display: none;
        }
      }
    }
    .name{
      font-size: 44px;
      line-height: 68px;
      margin-bottom: 7px;
      font-weight: bold;
    }
    .des{
      font-size: 30px;
      line-height: 36px;
      width: 330px;
      margin:0 auto;
      color: #fff;
    }
  }
  .footer{
    width: 594px;
    text-align: center;
    transform: translate3d(0,400%,0);
    transition: all 0.5s ease;
    &.show{
      transform: translate3d(0,0,0);
    }
    .submit{
      margin:55px auto 30px;
      width: 350px;
      height: 88px;
      text-align: center;
      color: rgb(255, 249, 72);
      text-shadow: 0px 1px 0px rgba(55, 115, 32, 0.75);
      font-size: 48px;
      font-weight: bold;
      display: inline-flex;
      justify-content: center;
      background: url('https://img5.168trucker.com/topic/images/worldCup/field.png') no-repeat;
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
