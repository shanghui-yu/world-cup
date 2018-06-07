<template>
  <div class="waaper">
    <img src="../assets/login.png" alt="" class="log">
    <div class="banner">
      <img src="../assets/banner.png" alt="">
      <a href="" class="rule">活动规则</a>
      <a href="" class="price">奖项设置</a>
    </div>

    <footer>
      <a href="" class="rank-btn">排行榜</a>
      <a href="" class="to-join">立即加入</a>
      <a href="" class="my-action">我的竞猜</a>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .waaper{
    height: 100%;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: url('../assets/bg.jpg') 50% 50% no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    .log{
      width: 169px;
      height: 60px;
      margin:40px 0 0 40px;
    }
    .banner{
      flex:1;
      position: relative;
      img{
        width: 750px;
        height: 460px;
        margin-top: 200px;
      }
      a{
        display: block;
        position: absolute;
        font-size: 0;
      }
      .rule{
        background: url('../assets/rule-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 251px;
        height: 143px;
        left: 30px;
        top:530px;
      }
      .price{
        background: url('../assets/price-set.png') 50% 50% no-repeat;
        background-size: cover;
        width: 249px;
        height: 141px;
        top:530px;
        right: 30px;
      }
    }
    footer{
      height: 150px;
      font-size: 0;
      width: 100%;
      a{
        display: inline-block;
      }
      .rank-btn{
        background: url('../assets/rank-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 165px;
        height: 149px;
      }
      .to-join{
        background: url('../assets/join-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 471px;
        height: 149px;
        margin-left: -30px;
      }
      .my-action{
        background: url('../assets/my-jingcai-btn.png') 50% 50% no-repeat;
        background-size: cover;
        width: 172px;
        height: 149px;
        margin-left: -31px;
      }
    }
  }
</style>
