export const createStore = (updater) => {
    let state

    function dispatch(data) {
        state = updater(state, data);
    }

    function getState() {
        return state;
    }

    return {
        dispatch,
        getState
    }
}
