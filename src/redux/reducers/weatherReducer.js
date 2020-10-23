const defaultState ={
    data: undefined
}

const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state;
    }
}

export default weatherReducer;
