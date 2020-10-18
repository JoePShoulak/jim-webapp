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

    return (<div className="isa_error">
        <i className="fa fa-times-circle" />
        {message}
    </div>)
}

export default ErrorMessage;
