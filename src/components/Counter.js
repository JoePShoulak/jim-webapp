import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const countDown = () => {
        setCount(count - 1)
    }

    const countUp = () => {
        setCount(count + 1)
    }

    const binet = (n) => {
        const root5 = Math.pow(5, 0.5);
        const phi = (1 + root5)/2.0;

        const num1 = Math.pow(phi, n);
        const num2 = Math.pow( (-phi), (-n) );

        return Math.round((num1 - num2)/root5);
    }

    return(
        <div className={"counter-wrapper"}>
            <p>Fibonacci number {count} is: {binet(count)}</p>
            <button onClick={countDown}>-</button>
            <button onClick={countUp}>+</button>
        </div>
    );
};

export default Counter;
