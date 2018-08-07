<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  body,p,h1,h2,h3,h4,ul,dl,dd,input{margin: 0;padding: 0;}
  i,em{font-style: normal;}
  ul li{list-style: none;}
  img{border: 0;vertical-align: top;}
  a{text-decoration: none;color: inherit;}
  body{font: 12px/1.5 "Microsoft YaHei",Arial; text-align: center;}
 
</style>
