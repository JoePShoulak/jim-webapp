import React, {useState} from 'react';
import {binet} from "../helpers/mathHelper";

const Counter = () => {
    const [count, setCount] = useState(1);

    return(
        <div className={"counter-wrapper"}>
            <p>Fibonacci number {count} is: {binet(count)}</p>

            <input type={"number"}
                   value={count}
                   onChange={(e) => setCount(parseInt(e.target.value))} />
        </div>
    );
};

export default Counter;
