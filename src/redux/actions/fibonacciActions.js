export const setCount = (count) => dispatch => {
    let newCount

    if (count === '') {
        newCount = 0
    } else {
        newCount = count
    }

    dispatch({
        type: "SET_COUNT",
        payload: {
            count: parseInt(newCount)
        }
    }

    )
}
