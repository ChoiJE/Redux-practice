import { createStore } from './redux.js';

function updater(state, data) {
    state = data + 5;
    return state;
}

const store = createStore(updater);

store.doUpdate("이걸로바꿔줘");

console.log("get state ", store.getState());