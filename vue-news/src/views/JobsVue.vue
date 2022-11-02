<template>
  <div>
    <div v-for="item in jobs">{{ item.title }}</div>
  </div>
</template>


<script>
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs : []
    }
  },
  created() {
    var vm = this;
    
    fetchJobsList()
    .then(function(response) {
      console.log(response);
      vm.jobs = response.data
    })
    .catch(function(error){
      console.log(error);
    })
  }
}
</script>

<style>