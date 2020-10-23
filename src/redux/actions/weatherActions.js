export const setData = (data) => dispatch => {
    dispatch({
            type: "SET_DATA",
            payload: {
                count: data
            }
        }

    )
}
