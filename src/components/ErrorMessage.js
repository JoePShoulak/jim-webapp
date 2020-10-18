import React from "react";

const ErrorMessage = (props) => {
    let message;

    switch (props.type) {
        case "INVALID-ARRAY":
            message = "Invalid array, check your parameters"
            break;
        default:
            message = "Something very strange happened..."
            break;
    }

    return <p className={"error-message"}>{message}</p>
}

export default ErrorMessage;
