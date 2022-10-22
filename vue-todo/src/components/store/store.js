import Vue from 'vue'
import Vuex from 'vuex'
import * as todoApp from '../modules/todoApp'

Vue.use(Vuex);      // use: 전역으로 Vuex를 쓰겠다.

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
})
