import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes : [    // 라우터 정보 세팅
    // {
    //     path: '/',
    //     redirect : '/news'
    // },
    {
        // path : url주소
        path: '/news',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: NewsView,
        name : 'news',
    },
    {
        path: '/ask',
        component: AskView,
        name : 'ask',
    },
    {
        path: '/jobs',
        component: JobsView,
        name : 'jobs',
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    
  ]
})