import React from "react";
import Array from "../../components/Array"


const Pisano = () => {
    const defaultModulus = 10;
    const defaultHeight = 5;

    return(
        <div>
            <h1>Pisano</h1>
            <Array modulus={defaultModulus} height={defaultHeight}/>
        </div>
    )
}

export default Pisano;
