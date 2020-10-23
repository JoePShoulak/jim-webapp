const defaultState ={
    count: 1,
    fibNum: 1,
}

const fibonacciReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_COUNT":
            return {
                ...state,
                count: action.payload.count
            }
        default:
            return state;
    }
}

export default fibonacciReducer;
