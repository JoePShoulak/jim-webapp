export const setCount = (count) => dispatch => {
    dispatch({
        type: "SET_COUNT",
        payload: {
            count: parseInt(count)
        }
    }

    )
}
