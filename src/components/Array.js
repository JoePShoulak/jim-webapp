import React, {useState} from 'react';
import {FindPeriod, MakeTable} from "../helpers/mathHelper";
import DisplayTable from "../helpers/formatHelper";

const Array = (props) => {
    const [height, setHeight] = useState(props.height);
    const [modulus, setModulus] = useState(props.modulus);
    const [period, setPeriod] = useState(FindPeriod(modulus));
    const [validArray, setValidArray] = useState(period/height === Math.round(period/height))

    const updateModulusFromInput = (e) => {
        const m = e.target.value;

        setModulus(m);
        const p = FindPeriod(m);

        setPeriod(p);
        setValidArray(p/height === Math.round(p/height));
    }

    const updateHeightFromInput = (e) => {
        const h = e.target.value

        setHeight(h);
        setValidArray(period/h === Math.round(period/h));
    }

    const table = MakeTable(modulus, height);

    return(
        <div className={"array-wrapper"}>
            <p>The Pisano Period of Modulus {modulus} is {period}</p>
            <label>Modulus: </label><input type={"number"} value={modulus} min={1} onChange={ (e) => updateModulusFromInput(e) } /> <br />
            <label>Height:  </label><input type={"number"} value={height} min={1} onChange={ (e) => updateHeightFromInput(e)  } /> <br />
            {DisplayTable(table, validArray)}
        </div>
    )
};

export default Array;
