const fibGen = (n) => {
    let fibPrevious = 0;                    // taking the Fibonacci sequence modulus m
    let fibCurrent = 1;
    let fibNext = 1;

    for (let i=2; i<n; i++) {
        fibPrevious = fibCurrent;
        fibCurrent = fibNext;
        fibNext = (fibCurrent + fibPrevious);
    }

    return fibNext;
}

const makeList = (modulus) => {             // Returns an array containing the periodic sequence resulting from
    let fibPrevious = 0;                    // taking the Fibonacci sequence modulus m
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

const makeTable = (modulus, height) => {    // Turns our 1-dimensional list into a nested array of rows
    const data   = makeList(modulus);
    const period = data.length;
    const width  = period/height;

    let tabulatedData = [];

    for (let i=0; i<height; i++) {
        let row = [];

        for (let j=0; j<width; j++) {
            row.push(data[i+j*height])
        }

        tabulatedData.push(row);
    }

    return [tabulatedData, period]
}

export {fibGen, makeTable};
