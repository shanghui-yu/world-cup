<<<<<<< HEAD
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
  background: url('../assets/banner.png') 0 -330px no-repeat;
  flex: 1;
  span{
    display: block;
    float: left;
  }
  .rule{
    background: url('../assets/rule-btn.png') 50% 50% no-repeat;
    background-size: cover;
    width: 251px;
    height: 143px;
    margin-left: 20px;
  }
  .home{
    background: url('../assets/back-home.png') 50% 50% no-repeat;
    background-size: cover;
    width: 198px;
    height: 131px;
    margin-top: 18px;
  }
  .price-btn{
    background: url('../assets/price-set.png') 50% 50% no-repeat;
    background-size: cover;
    width: 249px;
    height: 141px;
    margin-top: 3px;
  }
}
</style>
=======
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
  background: url('../assets/banner.png') 0 -330px no-repeat;
  flex: 1;
  span{
    display: block;
    float: left;
  }
  .rule{
    background: url('../assets/rule-btn.png') 50% 50% no-repeat;
    background-size: cover;
    width: 251px;
    height: 143px;
    margin-left: 20px;
  }
  .home{
    background: url('../assets/back-home.png') 50% 50% no-repeat;
    background-size: cover;
    width: 198px;
    height: 131px;
    margin-top: 18px;
  }
  .price-btn{
    background: url('../assets/price-set.png') 50% 50% no-repeat;
    background-size: cover;
    width: 249px;
    height: 141px;
    margin-top: 3px;
  }
}
</style>
>>>>>>> aaadf7bdf9a4112a3dabc7d5caddcdac5781a514
