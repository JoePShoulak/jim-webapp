export const setModulus = (modulus) => dispatch => {
    dispatch({
        type: "SET_MODULUS",
        payload: {
            modulus: parseInt(modulus)
        }
    })
}

export const setHeight = (height) => dispatch => {
    dispatch({
        type: "SET_HEIGHT",
        payload: {
            height: parseInt(height)
        }
    })
}
