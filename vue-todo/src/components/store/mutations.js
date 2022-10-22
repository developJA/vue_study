const addOneItem = (state, todoItem) => {   // mutation에서 state로 접근하는 방법 ? 첫번째 인자 state
    console.log("received");
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, payload) => {
    console.log("toggle   :  ", state.todoItems[payload.index].completed);
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export {addOneItem, removeOneItem, toggleOneItem, clearAllItems}