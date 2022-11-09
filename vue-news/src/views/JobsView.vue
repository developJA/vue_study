<template>
  <div>
    <!-- <div v-for="item in this.$store.state.jobs">{{ item.title }}</div> -->
    <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
  </div>
</template>


<script>

export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
    
    // var vm = this;
    
    // fetchJobsList()
    // .then(function(response) {
    //   console.log(response);
    //   vm.jobs = response.data
    // })
    // .catch(function(error){
    //   console.log(error);
    // })
  }
}
</script>

<style>