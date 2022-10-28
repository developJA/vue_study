<template>
    <header>
      <!-- <h1>TODO it!</h1> -->
      <h1>{{ this.headerText }}</h1>
    </header>
  </template>
  
  <script>
  import { mapGetters, mapState } from 'vuex';

  export default {
    computed: {
      // 모듈화했을 때 state 가져오는 방법 
      // 1) ...mapState('모듈 명', ['state 이름'])
      //    export 하는 부분에 namespaced 옵션을 주고, state를 가져오는 모든 commit 부분 수정
      // 2) getter를 사용

      // ...mapState(['headerText'])
      // ...mapState('todoApp', ['headerText']),
      ...mapGetters({
        headerText: 'getHeaderText',
      }),
    }
  }
  
  </script>
  
  <style scoped>
    h1 {
      color: #2F3B52;
      font-weight: 900;
      margin: 2.5rem 0 1.5rem;
    }
  </style>