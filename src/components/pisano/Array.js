import React, {useState} from 'react';
import _ from 'lodash';

import {makeTable}  from "../../helpers/mathHelper";
import PisanoTable  from "./PisanoTable";
import ErrorMessage from "../ErrorMessage";
import ArrayInput from "./ArrayInput";

const Array = (props) => {
    const [height,   setHeight] = useState(props.height);
    const [modulus, setModulus] = useState(props.modulus);

    const [table, period] = makeTable(modulus, height);
    const validArray = !_.includes(_.flatten(table), undefined);

    return(
        <div className={"pisano-wrapper"}>
            <p>The Pisano Period of the Fibonacci numbers modulus {modulus} is {period}</p>

            <ArrayInput label={"Modulus"} value={modulus}
                        func={(e) => {setModulus(e.target.value >= 2 ? e.target.value : 2) }}
            />

            <ArrayInput label={"Height"} value={height}
                        func={(e) => {setHeight(e.target.value >= 2 ? e.target.value : 2) }}
            />

            {validArray ? <PisanoTable table={table}/> : <ErrorMessage type={"INVALID-ARRAY"}/>}
        </div>
    )
};

export default Array;
