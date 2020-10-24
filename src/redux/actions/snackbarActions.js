export const setSnackbar = (open, type, message) => dispatch => {
    dispatch({
        type: "SET_SNACKBAR",
        payload: {
            open: open,
            type: type,
            message: message
        }
    })
}
