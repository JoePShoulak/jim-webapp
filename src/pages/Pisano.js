import React from "react";
import Array from "../components/pisano/Array"

const Pisano = () => {

    document.title = "Joe's App - Pisano"

    return(
        <div className={"page-wrapper"}>
            <h1 className={"title"}>Pisano</h1>
            <Array />
        </div>
    )
}

export default Pisano;
