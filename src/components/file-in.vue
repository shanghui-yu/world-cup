<template>
<form class="main">
  <img src="https://img5.168trucker.com/topic/images/worldCup/submit-title.png" class="title" alt="">
  <label for="" class="input">
    <span class="des">姓名</span><input type="text" v-model="forms.name" placeholder="请输入您的姓名">
  </label>
  <label for="" class="input">
    <span class="des">手  机  号</span><input type="text"  v-model="forms.phone" placeholder="请输入您的手机号">
  </label>
  <label for="" class="input">
    <span class="des">所驾车型</span>
    <div class="input-moni">
      <span :class="[carText=='请选择目前所驾车型'?'placeholder':'select']">{{carText}}</span>
      <select name="" id="" @change="changeCar" v-model="forms.model">
        <option value="中重卡">中重卡</option>
        <option value="轻微卡">轻微卡</option>
      </select>
    </div>
  </label>
  <div class="textarea">
    <span class="des">收货地址</span>
    <textarea placeholder="请输入您的详细地址"  v-model="forms.address"></textarea>
  </div>
  <button type="submit" class="submit" @click.prevent="submit">提交</button>
</form>
</template>

<script>
export default {
  props: ['userinfo'],
  data () {
    return {
      carText: '请选择目前所驾车型',
      forms: {
        name: '',
        phone: '',
        model: '',
        address: ''
      }
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.forms)
    },
    changeCar (e) {
      ga('send', 'event', '所驾车型', e.target.value, this.userinfo.nickname)
      this.carText = e.target.value
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
  .title{
    margin:24px auto;
  }
  .input,.textarea{
    background: url('https://img5.168trucker.com/topic/images/worldCup/input.png') no-repeat;
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
    .input-moni{
      flex: 1;
      position: relative;
      .placeholder{
        font-size: 30px;
        color: rgba(255,255, 255, 0.6)
      }
      .select{
        font-size: 30px;
      }
      select{
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
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
    background: url('https://img5.168trucker.com/topic/images/worldCup/textarea.png') no-repeat;
    width: 570px;
    height: 207px;
    textarea{
     margin: 38px auto 20px;
    }
  }
  .submit{
      margin: 20px auto 34px;
      background: url('https://img5.168trucker.com/topic/images/worldCup/submit.png') no-repeat;
      width: 320px;
      height: 96px;
      font-size: 0;
  }
}
</style>
