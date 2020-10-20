import React, {useState} from 'react';
import _ from 'lodash';

import {makeTable}  from "../../helpers/mathHelper";
import PisanoTable  from "./PisanoTable";
import ErrorMessage from "../ErrorMessage";
import PisanoInput from "./PisanoInput";

const Pisano = () => {
    const [height,   setHeight] = useState(5);
    const [modulus, setModulus] = useState(10);

    const [table, period] = makeTable(modulus, height);
    const validArray = !_.includes(_.flatten(table), undefined);

    return(
        <div className={"pisano-wrapper"}>
            <p>The Pisano Period of the Fibonacci numbers modulus {modulus} is {period}</p>

            <PisanoInput label={"Modulus"} value={modulus}
                         func={(e) => {setModulus(e.target.value >= 2 ? e.target.value : 2) }}
            />

            <PisanoInput label={"Height"} value={height}
                         func={(e) => {setHeight(e.target.value >= 2 ? e.target.value : 2) }}
            />

            {validArray ? <PisanoTable table={table}/> : <ErrorMessage type={"INVALID-ARRAY"}/>}
        </div>
    )
};

export default Pisano;
