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
          <img :src="resultTeam.team_A_logo" alt="" >
          <figcaption>{{resultTeam.team_A_name}}</figcaption>
        </figure>
        <span class="vs">VS</span>
        <figure>
          <img :src="resultTeam.team_B_logo" alt="" >
          <figcaption>{{resultTeam.team_B_name}}</figcaption>
        </figure>
        <!-- <img :src="randomTeam>0.5?resultTeam.team_A_logo:resultTeam.team_B_logo" alt="" > -->
      </div>
    </div>
    <!-- title -->
     <span class="name" v-if="!showPrice">{{selectObj.factory}}</span>
     <span class="team-name" v-else><em>押注球队：</em>{{randomTeam>0.5?resultTeam.team_A_name:resultTeam.team_B_name}}队</span>

     <span class="des">{{selectObj.desc}}</span>
   </div>
   <div :class="['footer',showPrice?'show':'']">
     <p class="tip">请选择您的竞猜胜负</p>
     <div class="betting">
       <div class="win" @click="select('胜')">
         <figure><img src="https://img5.168trucker.com/topic/images/worldCup/win.png" alt=""></figure>
       </div>
       <!-- <div class="flat" @click="select('平')">
         <figure><img src="https://img5.168trucker.com/topic/images/worldCup/flat.png" alt=""></figure>
      </div> -->
       <div class="fail" @click="select('负')">
         <figure><img src="https://img5.168trucker.com/topic/images/worldCup/fail.png" alt=""></figure>
      </div>
     </div>
   </div>
  </div>
</transition>
</template>

<script>
export default {
  props: ['selectObj', 'matchList', 'cards'],
  data () {
    return {
      // 翻牌
      flipInY: 0,
      // 显示结果
      showPrice: 0,
      resultTeam: {},
      selectIndex: null,
      randomTeam: 0
    }
  },
  computed: {
    indexs () { return this.$store.state.indexs }
  },
  created () {
    this.randomTeam = Math.random()
    console.log(this.indexs, 666)
  },
  mounted () {
    // 随机获取球队
    this.getMathPrice()
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
    select (e) {
      this.$emit('showEliminate')
      // 设置主场球队状态
      let mactchRes = null
      let teamType = null
      switch (e) {
        case '胜':
          mactchRes = this.randomTeam > 0.5 ? 1 : -1
          teamType = this.randomTeam > 0.5 ? '胜' : '负'
          break
        case '平':
          mactchRes = 0
          teamType = '平'
          break
        case '负':
          mactchRes = this.randomTeam > 0.5 ? -1 : 1
          teamType = this.randomTeam > 0.5 ? '负' : '胜'
          break
      }
      let json = {
        index: this.selectIndex,
        val: mactchRes
      }
      this.$store.dispatch('setSelectIndex', this.selectIndex)
      this.$store.dispatch('setMatchRes', json)
      this.resultTeam.type = e
      this.resultTeam.randomTeam = this.randomTeam
      this.resultTeam.teamType = teamType
      this.$emit('select', this.resultTeam)
    },
    getMathPrice () {
      let times = setTimeout(() => {
        let n = Math.floor(Math.random() * this.matchList.length + 1) - 1
        if (this.indexs.indexOf(n) < 0) {
          this.selectIndex = n
          this.resultTeam = this.matchList[this.selectIndex]
          times && clearTimeout(times)
        } else {
          this.getMathPrice()
        }
      }, 100)
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
      width: 400px;
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
        // width: 0;
        // opacity: 0;
        transform: translate3d(0,0,0);
        transform: scaleX(0);
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 320px;
        overflow: hidden;
        figure{
          width: 140px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          img{
            width: 140px;
            height: 140px;
            border:1px solid #fff;
            border-radius: 50%;
            overflow: hidden;
            margin-top: 20px;
          }
          figcaption{
            margin-top: 30px;
            font-weight: bold;
            font-size: 28px;
            overflow: hidden;
            color: #fff;
          }
        }
        span{
          display: block;
          flex:1;
          font-size: 50px;
          letter-spacing: 3px;
          margin-top: -50px;
        }
        &.show{
          // width: 100%;
          transform: scaleX(1);
          // opacity: 1;
        }
      }
      .fileinY{
        // width: 100%;
        transform: scaleX(1);
        transition: all 0.5s ease;
        &.hide{
          transform: scaleX(0);
          // width: 0;
        }
        &.none{
          display: none;
        }
      }
    }
    .name,.team-name{
      font-size: 44px;
      line-height: 68px;
      margin-bottom: 7px;
      font-weight: bold;
    }
    .team-name{
      em{
        font-size: 30px;
        color: #fff;
      }
      font-size: 40px;
      color: #f25b44;
      font-weight: bold;
    }
    .des{
      font-size: 28px;
      line-height: 36px;
      width: 330px;
      margin:0 auto;
      color: #fff948;
    }
  }
  .footer{
    width: 594px;
    text-align: center;
    transform: translate3d(0,200%,0);
    transition: all 0.5s ease;
    &.show{
      transform: translate3d(0,0,0);
    }
    .tip{
      font-size: 30px;
      line-height: 36px;
      color: #fff;
      margin:55px auto 30px;
    }
    .betting{
      display: flex;
      >div{
        display: flex;
        flex: 1;
        justify-content: center;
        figure{
          width: 145px;
          height: 145px;
        }
      }
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
