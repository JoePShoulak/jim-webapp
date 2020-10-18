import React, {useState} from 'react';

const Array = (props) => {
    const [modulus, setModulus] = useState(props.modulus);

    const findPeriod = (m) => {
        let a = 1;
        let b = 1;

        let itCount = 1;

        while (!(a === 0 && b === 1)) {
            itCount++;

            let c = a;
            a = b;
            b = (b + c) % m;
        }

        return itCount;
    }

    const updateFromInput = (e) => {
        setModulus(e.target.value)
    }

    return(
        <div>
            <p>The Pisano Period of Modulus {modulus} is {findPeriod(modulus)}</p>
            <input type={"number"} value={modulus} onChange={(e) => updateFromInput(e)} />
        </div>
    )
};

export default Array;
