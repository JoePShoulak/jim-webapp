import React, {useState} from 'react';
import {FindPeriod, MakeTable} from "../helpers/mathHelper";

const Array = (props) => {
    const [modulus, setModulus] = useState(props.modulus);
    const [period, setPeriod] = useState(FindPeriod(modulus));
    const [height, setHeight] = useState(props.height);
    const [validArray, setValidArray] = useState(period/height === Math.round(period/height))

    const updateModulusFromInput = (e) => {
        const m = e.target.value;

        setModulus(m);
        setPeriod(FindPeriod(m));
        setValidArray(period/height === Math.round(period/height));
    }

    const updateHeightFromInput = (e) => {
        const h = e.target.value

        setHeight(h);
        setValidArray(period/h === Math.round(period/h));
    }

    const formatTable = (table) => {
        return table.map(row => <tr> {row.map(item => <td>{item}</td>)} </tr>)
    }

    const displayTable = (table) => {
        let response;

        switch (validArray) {
            case true:
                response = (
                    <div>
                        <table>
                            <thead>
                                {formatTable(table)}
                            </thead>
                        </table>
                    </div>
                )
                break;
            case false:
                response = <p>Invalid array, check your parameters</p>
                break;
            default:
                response =  <p>Something really strange happened, unable to display array</p>
                break;
        }

        return response;
    }

    return(
        <div className={"array-wrapper"}>
            <p>The Pisano Period of Modulus {modulus} is {period}</p>
            <p>Array is valid: {validArray.toString()}</p>
            <p>Modulus: {modulus} Height: {height} Period: {period}</p>
            <label>Modulus: </label><input type={"number"} value={modulus} onChange={ (e) => updateModulusFromInput(e) } /> <br />
            <label>Height:  </label><input type={"number"} value={height}  onChange={ (e) => updateHeightFromInput(e)  } /> <br />
            {displayTable(MakeTable(modulus, height))}
        </div>
    )
};

export default Array;
