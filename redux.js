export const createStore = (updater) => {
    let state;
    const subscribers = [];

    function dispatch(data) {
        state = updater(state, data);
        subscribers.forEach(subscriber => subscriber());
    }

    function getState() {
        return state;
    }

    function addSubscriber(subscriber) {
        subscribers.push(subscriber);
    }

    return {
        dispatch,
        getState,
        addSubscriber
    }
}
