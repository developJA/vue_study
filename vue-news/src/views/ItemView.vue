<template>
<div>
    <section>
        <!--질문 상세 정보-->
        <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <router-link :to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link>
                <div class="time"> 
                    {{ fetchedItem.time_ago }}
                </div>
            </div>
        </div>
        <h2>{{ fetchedItem.title }}</h2>
        <!--//질문 상세 정보-->
    </section>
    <section>
        <!-- 질문 댓글 -->
        <div v-html="fetchedItem.content"></div>
    </section>
    <!-- <p>title : {{ itemInfo.title }}</p> -->
    
</div>
</template>

<script>
/* Dynamic Rroute Matching : 특정페이지의 정보를 가지고 다음페이지를 이동할 수 있음 */
import { mapGetters } from 'vuex';

export default {
computed : {
    ...mapGetters(['fetchedItem'])
},
created() {
    // console.log("this   ", this.$route);
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
}
}
</script>

<style scoped>
    .user-container{
        display:flex;
        align-items: center;
        padding:.5rem;
    }
    .fa-user{
        font-size:2.5rem;
    }
    .user-description{
        padding-left: 8px;
    }
    .time{
        font-size: 0.7rem;
    }
</style>