import React, {useState} from 'react';
import {FindPeriod} from "../helpers/mathHelper";

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

    const makeTable = (modulus, height) => {
        let fibCurrent = 1;
        let fibNext = 1;

        let data = [1];

        while (!(fibCurrent === 0 && fibNext === 1)) {
            data.push(fibNext);

            let fibPrevious = fibCurrent;
            fibCurrent = fibNext;
            fibNext = (fibCurrent + fibPrevious) % modulus;
        }

        let tabulatedData = [];
        const period = data.length;

        for (let i=0; i<height; i++) {
            let row = [];

            let j = i;
            while (j < period) {
                let pNum = data[j];

                row.push(pNum);
                j += height;
            }

            tabulatedData.push(row);
        }

        return tabulatedData
    }

    return(
        <div>
            <p>The Pisano Period of Modulus {modulus} is {period}</p>
            <p>Array is valid: {validArray.toString()}</p>
            <p>Modulus: {modulus} Height: {height} Period: {period}</p>
            <label>Modulus: </label><input type={"number"} value={modulus} onChange={ (e) => updateModulusFromInput(e) } /> <br />
            <label>Height:  </label><input type={"number"} value={height}  onChange={ (e) => updateHeightFromInput(e)  } />
        </div>
    )
};

export default Array;
