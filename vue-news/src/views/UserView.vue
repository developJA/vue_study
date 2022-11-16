<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
/* Dynamic Rroute Matching : 특정페이지의 정보를 가지고 다음페이지를 이동할 수 있음 */

export default {
  computed : {
    userInfo() {
      return  this.$store.state.user;
    }
  },
  created() {
    // console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>