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

const state = {
    headerText: 'TODO it!!',
    todoItems : storage.fetch(),
}

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
}

const mutations = {
    addOneItem(state, todoItem) {   // mutation에서 state로 접근하는 방법 ? 첫번째 인자 state
        console.log("received");
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
        console.log("toggle   :  ", state.todoItems[payload.index].completed);
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    },
}

export const modules = {
    todoApp : {
        state,
        getters,
        mutations,
    }
}