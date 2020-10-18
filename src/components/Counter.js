import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const binet = (n) => {
        const root5 = Math.pow(5, 0.5);
        const phi = (1 + root5)/2.0;

        const num1 = Math.pow(phi, n);
        const num2 = Math.pow( (-phi), (-n) );

        return Math.round((num1 - num2)/root5);
    }

    const updateFromInput = (e) => {
        setCount(e.target.value)
    }

    return(
        <div className={"counter-wrapper"}>
            <p>Fibonacci number {count} is: {binet(count)}</p>
            <input type={"number"} value={count} onChange={(e) => updateFromInput(e)} />
        </div>
    );
};

export default Counter;
