import {createStore} from './redux.js';

const INCREASE = 'increase'
const DECREASE = 'decrease'
const MULTIPLY = 'multiply'

function reducer(state = {버튼값: 1, 입력값: 5}, data) {
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
    } else if (data.type === MULTIPLY) {
        state = {
            ...state,
            입력값: state.입력값 * data.payload
        }
    }
    return state;
}

const store = createStore(reducer);

store.addSubscriber(subscriber);

store.dispatch({
    type: INCREASE,
    payload: 10
});

store.dispatch({
    type: DECREASE,
    payload: 5
});

store.dispatch({
    type: MULTIPLY,
    payload: 5
});


function subscriber() {
    console.log("get state ", store.getState());
}

