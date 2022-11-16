import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo} from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList() 
        .then(response => {
            console.log(response);
            context.commit('SET_NEWS', response.data);
            // state.news = response.data;
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_ASK({ commit }){
        fetchAskList() 
        .then(({ data, status }) => {
            console.log(status);
            commit('SET_ASK', data);
            // state.news = response.data;
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_JOBS({ commit }){
        fetchJobsList() 
        .then(({ data }) => {
            commit('SET_JOBS', data);
            // state.news = response.data;
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch(function(error){
            console.log(error);
        })
    }
}