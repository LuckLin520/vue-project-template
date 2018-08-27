<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="head-box">
      <div class="title-h1"><p>LuckLin</p></div>
      <div id="zzsc"></div>
    </div>
    <vue-canvas-nest :config="config"></vue-canvas-nest>

    <router-view/>
  </div>
</template>

<script>
import vueCanvasNest from 'vue-canvas-nest'
// require('../static/js/canvas-time')
// console.log($)
export default {
  name: 'App',
  components: { vueCanvasNest },
  data () {
    return {
      config: {
        color: '4,20,251',
        count: 100
      }
    }
  },
  mounted () {
    require('../static/js/canvas-time')
  }
}
</script>

<style lang="scss">
@import './assets/iconfont/iconfont.css';
  body,p,h1,h2,h3,h4,ul,dl,dd,input{margin: 0;padding: 0;}
  i,em{font-style: normal;}
  ul li{list-style: none;}
  img{border: 0;vertical-align: top;}
  a{text-decoration: none;color: inherit;}
  body{font: 12px/1.5 "Microsoft YaHei",Arial; text-align: center; color: #333}
  
  #app{
    padding-top:30px;
    .vue-canvas-nest-element{
      height: 135px;
      background: RGB(112,212,249)
    }
    .head-box{
      display: flex;
      justify-content:space-between;
      .title-h1{
        height: 40px;
        p{
          font-size: 30px;
          margin-left: 9vw;
        }
      }
    }
    
  }

 
</style>
