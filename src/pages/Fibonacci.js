import React from 'react';
import Counter from "../components/fibonacci/Counter";

const Fibonacci = () => {
    document.title = "Joe's App - Fibonacci"

    return(
        <div className={"page-wrapper"}>
            <h1>Fibonacci Counter</h1>
            <Counter />
        </div>
    )
}

export default Fibonacci;
