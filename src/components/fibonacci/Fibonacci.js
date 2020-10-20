import React, {useState} from 'react';
import {fibGen} from "../../helpers/mathHelper";

const Fibonacci = () => {
    const [count, setCount] = useState(1);

    return(
        <div className={"counter-wrapper"}>
            <p>Fibonacci number {count} is: {fibGen(count)}</p>

            <input type={"number"}
                   value={count}
                   onChange={(e) => setCount(parseInt(e.target.value))} />
        </div>
    );
};

export default Fibonacci;
