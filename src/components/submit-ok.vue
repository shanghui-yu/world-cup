<template>
<div class="main">
  <div class="status">提交成功</div>
  <div class="tips">长按下方二维码</div>
  <p class="important">关注公众号，您将在活动结束时获得官方送出的<strong>50</strong>积分，积分将计入排行榜</p>
  <figure class="code">
    <img src="https://img5.168trucker.com/topic/images/worldCup/code.png" alt="">
    <figcaption @click="toSubmit">直接去补全我的领奖信息</figcaption>
  </figure>
</div>
</template>

<script>
import storage from '../store/storage.js'
export default {
  data () {
    return {
      userinfo: {}
    }
  },
  methods: {
    toSubmit () {
      let userinfo = storage.get('userInfoWorldCup')
      if (userinfo) {
        this.userinfo = JSON.parse(userinfo)
      }
      ga('send', 'event', '点击补全信息', '世界杯活动', this.userinfo.nickname)
      this.jump('/Submit')
    }
  }
}
</script>

<style scoped lang="less">
.main{
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .status{
    font-size: 48px;
    line-height:50px;
    color:#fff948;
    margin-bottom: 20px;
    &::before{
      content: '';
      background: url('https://img5.168trucker.com/topic/images/worldCup/submit-ok.png') no-repeat;
      margin: 20px auto 20px;
      width: 185px;
      height: 186px;
      display: block;
    }
  }
  .tips{
    font-size: 30px;
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
  .important{
    font-size: 30px;
    color: #fff;
    padding: 0 30px;
    margin-top: 15px;
    text-align: center;
    letter-spacing: 0.8px;
    strong{
      font-size: 40px;
      color: #fff948;
      display: inline-block;
      margin:0 10px;
      animation:eye 1s infinite linear;
    }
  }
  .code{
    img{
      margin: 30px auto;
      width: 448px;
      height: 449px;
      pointer-events:auto;
    }
    figcaption{
      font-size: 30px;
      color: #fff948;
      text-shadow: 0px 4px 0px rgba(52, 112, 0, 0.35);
      font-weight: bold;
      text-align: center;
      transform: matrix( 0.98386181238788,0,0,0.98386181238787,0,0);
      margin-bottom: 30px;
      &::after{
        content: '';
        display: inline-block;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaBAMAAACa4xtRAAAAFVBMVEUAAAD/+Uj/+Uj/+Uj/+Uj/+Uj/+Ug23S84AAAAB3RSTlMA/lblT0no2KJNqwAAADdJREFUCNdjCDZhgABDQQUYQwjCcBSECjEJwoQUKRBygAkZwBlwKZhiuHZSBBBORTge4Z0wqAcBObIJNICb644AAAAASUVORK5CYII=) no-repeat 50% 50%;
        width: 15px;
        height: 26px;
        margin-left: 10px;
      }
    }
  }
}
</style>
