<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <div class="points">
            {{ job.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
          <small>
            {{ item.time_ago }} by 
            <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small> 
      </li>
    </ul> -->
  </div>
</template>


<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: { 
    ListItem 
  },
  // created() {
    
  //   this.$store.dispatch("FETCH_JOBS");
    
  //   // var vm = this;
    
  //   // fetchJobsList()
  //   // .then(function(response) {
  //   //   console.log(response);
  //   //   vm.jobs = response.data
  //   // })
  //   // .catch(function(error){
  //   //   console.log(error);
  //   // })
  // }
}
</script>
