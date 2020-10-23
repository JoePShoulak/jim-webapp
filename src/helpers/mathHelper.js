const fibGen = (n) => {
    let fibPrevious = 0;                    // taking the FibonacciPage sequence modulus m
    let fibCurrent = 1;
    let fibNext = 1;

    let newN;
    let negative = false;

    if (n<0) {
        newN = -n
        negative = true
    } else {
        newN = n
    }

    for (let i=2; i<newN; i++) {
        fibPrevious = fibCurrent;
        fibCurrent = fibNext;
        fibNext = (fibCurrent + fibPrevious);
    }

    fibNext = (n === 0) ? 0 : fibNext
    fibNext = negative ? fibNext*(-Math.pow(-1, newN % 2)) : fibNext

    return fibNext;
}

const makeList = (modulus) => {             // Returns an pisano containing the periodic sequence resulting from
    let fibPrevious = 0;                    // taking the FibonacciPage sequence modulus m
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

const makeTable = (modulus, height) => {    // Turns our 1-dimensional list into a nested pisano of rows
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
