import React, {useState} from 'react';
import {MakeTable} from "../helpers/mathHelper";
import DisplayTable from "../helpers/formatHelper";

const Array = (props) => {
    const [height, setHeight]   = useState(props.height);
    const [modulus, setModulus] = useState(props.modulus);

    const [table, period] = MakeTable(modulus, height);
    const validArray = (period/height === Math.round(period/height))

    return(
        <div className={"array-wrapper"}>
            <p>The Pisano Period of Modulus {modulus} is {period}</p>

            <label>Modulus: </label>
            <input type={"number"}
                   value={modulus}
                   min={1}
                   onChange={ (e) => setModulus(e.target.value) } /> <br />

            <label>Height:  </label>
            <input type={"number"}
                   value={height}
                   min={1}
                   onChange={ (e) => setHeight(e.target.value)  } /> <br />

            {DisplayTable(table, validArray)}
        </div>
    )
};

export default Array;
