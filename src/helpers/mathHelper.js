const FindPeriod = (m) => {
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

const Binet = (n) => {
    const root5 = Math.pow(5, 0.5);
    const phi = (1 + root5)/2.0;

    const num1 = Math.pow(phi, n);
    const num2 = Math.pow( (-phi), (-n) );

    return Math.round((num1 - num2)/root5);
}

export {FindPeriod, Binet};
