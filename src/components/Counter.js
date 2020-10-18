import React, {useState} from 'react';
import {Binet} from "../helpers/mathHelper";


const Counter = () => {
    const [count, setCount] = useState(1);

    const updateFromInput = (e) => {
        setCount(e.target.value)
    }

    return(
        <div className={"counter-wrapper"}>
            <p>Fibonacci number {count} is: {Binet(count)}</p>
            <input type={"number"} value={count} onChange={(e) => updateFromInput(e)} />
        </div>
    );
};

export default Counter;
