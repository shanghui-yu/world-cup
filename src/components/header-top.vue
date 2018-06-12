<template>
<header>
  <span class="rule" @click="showRule">活动规则</span>
  <span class="home" @click="tohome">会主页</span>
  <span class="price-btn" @click="showPriceRule">奖项设置</span>
</header>
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
    },
    tohome () {
      this.$emit('tohome')
    },
    showPriceRule () {
      this.$emit('showPriceRule')
    }
  }
}
</script>

<style scoped lang="less">
 header{
  background: url('http://img5.168trucker.com/topic/images/worldCup/banner.png') 0 -330px no-repeat;
  flex: 1;
  span{
    display: block;
    float: left;
    animation:flash 5s infinite linear;
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
</style>
