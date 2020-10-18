const binet = (n) => {                      // Use the stanford Binet formula to find the Nth Fibonacci number
    const root5 = Math.pow(5, 0.5);
    const phi = (1 + root5)/2.0;

    const num1 = Math.pow(phi, n);
    const num2 = Math.pow( (-phi), (-n) );

    return Math.round((num1 - num2)/root5);
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

export {binet, makeTable};
