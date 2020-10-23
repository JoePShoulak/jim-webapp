const defaultState ={
    open: false,
    type: 'error',
    message: ""
}

const snackbarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SNACKBAR":
            return {
                ...state,
                open: action.payload.open,
                type: action.payload.type,
                message: action.payload.message
            }
        default:
            return state;
    }
}

export default snackbarReducer;
