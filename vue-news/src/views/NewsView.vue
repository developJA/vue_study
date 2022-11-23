<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// 데이터를 블러올때는 컴포는트를 등록해서 하는게 좋음.
import ListItem from '../components/ListItem.vue';

export default {
  components:{
    ListItem,
  }
}
</script>
