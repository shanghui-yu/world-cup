<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './mixin/publick.css';
#app {
  height: 100%;
  overflow: hidden;
}
</style>
