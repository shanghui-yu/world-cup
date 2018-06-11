<<<<<<< HEAD
<template>
<div class="main">
  <div class="status">提交成功</div>
  <div class="tips">请长按关注下方公众号，<br> 您将第一时间获得中奖消息</div>
  <figure class="code">
    <img src="../assets/code.png" alt="">
    <figcaption>直接去补全我的领奖信息</figcaption>
  </figure>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
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
      background: url('../assets/submit-ok.png') no-repeat;
      margin: 55px auto 20px;
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
  .code{
    img{
      margin: 41px auto;
      width: 448px;
      height: 449px;
    }
    figcaption{
      font-size: 30px;
      color: #fff948;
      text-shadow: 0px 4px 0px rgba(52, 112, 0, 0.35);
      font-weight: bold;
      text-align: center;
      transform: matrix( 0.98386181238788,0,0,0.98386181238787,0,0);
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
=======
<template>
<div class="main">
  <div class="status">提交成功</div>
  <div class="tips">请长按关注下方公众号，<br> 您将第一时间获得中奖消息</div>
  <figure class="code">
    <img src="../assets/code.png" alt="">
    <figcaption>直接去补全我的领奖信息</figcaption>
  </figure>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
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
      background: url('../assets/submit-ok.png') no-repeat;
      margin: 55px auto 20px;
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
  .code{
    img{
      margin: 41px auto;
      width: 448px;
      height: 449px;
    }
    figcaption{
      font-size: 30px;
      color: #fff948;
      text-shadow: 0px 4px 0px rgba(52, 112, 0, 0.35);
      font-weight: bold;
      text-align: center;
      transform: matrix( 0.98386181238788,0,0,0.98386181238787,0,0);
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
>>>>>>> aaadf7bdf9a4112a3dabc7d5caddcdac5781a514
