<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news">
      {{ user.title }}
    </div> -->
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
    
  </div>
</template>

<script>
// 데이터를 블러올때는 컴포는트를 등록해서 하는게 좋음.
// import { fetchNewsList } from '../api/index.js';

export default {

  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>

