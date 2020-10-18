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

const makeList = (modulus) => {
    let fibPrevious = 0;
    let fibCurrent = 1;
    let fibNext = 1;

    let data = [1];

    while (!(fibCurrent === 0 && fibNext === 1)) {
        data.push(fibNext);

        fibPrevious = fibCurrent;
        fibCurrent = fibNext;
        fibNext = (fibCurrent + fibPrevious) % modulus;
    }

    return data
}

const MakeTable = (modulus, height) => {
    const data = makeList(modulus)

    let tabulatedData = [];
    const period = data.length;
    const width = period/height;

    for (let i=0; i<height; i++) {
        let row = [];

        for (let j=0; j<width; j++) {
            row.push(data[i+j*height])
        }

        tabulatedData.push(row);
    }

    return tabulatedData
}

export {FindPeriod, Binet, MakeTable};
