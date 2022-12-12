<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ "Joined " + userInfo.created }},</span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
    <!-- <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p> -->
  </div>
</template>

<script>
/* Dynamic Rroute Matching : 특정페이지의 정보를 가지고 다음페이지를 이동할 수 있음 */
import UserProfile from '../components/UserProfile.vue'

export default {
  components : {
    UserProfile
  },
  computed : {
      userInfo() {
          return  this.$store.state.user;
      }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>