import {createStore} from './redux.js';

const INCREASE = 'increase'
const DECREASE = 'decrease'

function reducer(state = {버튼값: 1}, data) {
    if (data.type === INCREASE) {
        state = {
            ...state,
            버튼값: state.버튼값 + data.payload
        }
    } else if (data.type === DECREASE) {
        state = {
            ...state,
            버튼값: state.버튼값 - data.payload
        }
    }
    return state;
}

const store = createStore(reducer);

store.dispatch('안녕');

store.dispatch({
    type: INCREASE,
    payload: 10
});

store.dispatch({
    type: DECREASE,
    payload: 5
});

console.log("get state ", store.getState());

