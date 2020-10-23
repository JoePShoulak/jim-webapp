export const setSnackbar = (open, type, message) => dispatch => {
    console.log('called')
    dispatch({
        type: "SET_SNACKBAR",
        payload: {
            open: open,
            type: type,
            message: message
        }
    })
}
