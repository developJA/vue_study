import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);      // use? 전역으로 Vuex를 쓰겠다.

const storage = {
    fetch(){
        const arr = [];
        if (localStorage.length > 0) {
			for (var i = 0; i < localStorage.length; i++) {
				if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    // this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
			}
		}
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it!!',
        todoItems : storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(todoItem);
        },
        removeOneItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
    }
    
})
