import React from "react";

const ErrorMessage = (props) => {
    let message;

    switch (props.type) {
        case "INVALID-ARRAY":
            message = "Invalid pisano, check your parameters"
            break;
        default:
            message = "Something very strange happened..."
            break;
    }

    return (
        <div className="error-message">
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage;
