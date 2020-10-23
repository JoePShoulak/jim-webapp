const defaultState ={
    modulus: 10,
    height: 5,
}

const pisanoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_MODULUS":
            return {
                ...state,
                modulus: action.payload.modulus
            }
        case "SET_HEIGHT":
            return {
                ...state,
                height: action.payload.height
            }
        default:
            return state;
    }
}

export default pisanoReducer;
