export const createStore = (updater) => {
    let state = "초기값";

    function doUpdate(data) {
        state = updater(state, data);
        console.log("update!")
    }

    function getState() {
        return state;
    }

    return {
        doUpdate,
        getState
    }
}
