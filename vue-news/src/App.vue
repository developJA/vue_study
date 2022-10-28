<template>
  <div id="app">
    <!-- 생산성을 위해 plugin을 사용하기에 => 컴포넌트 등록했을 때는 캐멀으로 표현, 태그에서 등록할땐 케밥으로 표현-->
    <!-- 1- Strongly Recommended <ToolBar></ToolBar> -->
    <!-- // 2- Essential : <tool-bar></tool-bar> -->
    <tool-bar></tool-bar>
    <!-- url 주소에 따라 view가 뿌려짐-->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components:{
    ToolBar,
  }
  
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  padding: 0;
  margin: 0;
}
</style>
