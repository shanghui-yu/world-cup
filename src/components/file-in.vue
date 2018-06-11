<<<<<<< HEAD
<template>
<form class="main">
  <img src="../assets/submit-title.png" class="title" alt="">
  <label for="" class="input">
    <span class="des">姓名</span><input type="text" placeholder="请输入您的姓名">
  </label>
  <label for="" class="input">
    <span class="des">手  机  号</span><input type="text" placeholder="请输入您的姓名">
  </label>
  <label for="" class="input">
    <span class="des">所驾车型</span><input type="text" placeholder="请输入您的姓名">
  </label>
  <div class="textarea">
    <span class="des">收货地址</span>
    <textarea placeholder="请输入您的详细地址"></textarea>
  </div>
  <button type="submit" class="submit">提交</button>
</form>
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
  .title{
    margin:24px auto;
  }
  .input,.textarea{
    background: url('../assets/input.png') no-repeat;
    width: 570px;
    height: 107px;
    line-height: 107px;
    margin-bottom: 14px;
    display: flex;
    .des{
      text-align-last: justify;
      margin:0 20px 0 28px;
      font-size: 30px;
      color: #fff;
      display: inline-block;
      width: 125px;
    }
    input,textarea{
      border: none;
      background: transparent;
      flex: 1;
      font-size: 30px;
      padding: 0 20px 0 5px;
      box-sizing: border-box;
      &::-webkit-input-placeholder{
        color: rgba(255,255, 255, 0.6)
      }
    }
  }
  .textarea{
    background: url('../assets/textarea.png') no-repeat;
    width: 570px;
    height: 207px;
    textarea{
     margin: 38px auto 20px;
    }
  }
  .submit{
      margin: 20px auto 34px;
      background: url('../assets/submit.png') no-repeat;
      width: 320px;
      height: 96px;
      font-size: 0;
  }
}
</style>
=======
<template>
<form class="main">
  <img src="../assets/submit-title.png" class="title" alt="">
  <label for="" class="input">
    <span class="des">姓名</span><input type="text" placeholder="请输入您的姓名">
  </label>
  <label for="" class="input">
    <span class="des">手  机  号</span><input type="text" placeholder="请输入您的姓名">
  </label>
  <label for="" class="input">
    <span class="des">所驾车型</span><input type="text" placeholder="请输入您的姓名">
  </label>
  <div class="textarea">
    <span class="des">收货地址</span>
    <textarea placeholder="请输入您的详细地址"></textarea>
  </div>
  <button type="submit" class="submit">提交</button>
</form>
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
  .title{
    margin:24px auto;
  }
  .input,.textarea{
    background: url('../assets/input.png') no-repeat;
    width: 570px;
    height: 107px;
    line-height: 107px;
    margin-bottom: 14px;
    display: flex;
    .des{
      text-align-last: justify;
      margin:0 20px 0 28px;
      font-size: 30px;
      color: #fff;
      display: inline-block;
      width: 125px;
    }
    input,textarea{
      border: none;
      background: transparent;
      flex: 1;
      font-size: 30px;
      padding: 0 20px 0 5px;
      box-sizing: border-box;
      &::-webkit-input-placeholder{
        color: rgba(255,255, 255, 0.6)
      }
    }
  }
  .textarea{
    background: url('../assets/textarea.png') no-repeat;
    width: 570px;
    height: 207px;
    textarea{
     margin: 38px auto 20px;
    }
  }
  .submit{
      margin: 20px auto 34px;
      background: url('../assets/submit.png') no-repeat;
      width: 320px;
      height: 96px;
      font-size: 0;
  }
}
</style>
>>>>>>> aaadf7bdf9a4112a3dabc7d5caddcdac5781a514
