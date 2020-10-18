import React from "react";

const formatTableRows = (table) => {
    let rowKey = 0;
    let itemKey = 0;

    return (
        table.map(row => {
            return <tr key={rowKey++}>{row.map(item => {
                return <td key={itemKey++}>{item}</td>
            }) }</tr>
        })
    )
}

const DisplayTable = (table, validArray) => {
    switch (validArray) {
        case true:
            return <table><thead>{formatTableRows(table)}</thead></table>
        case false:
            return <p>Invalid array, check your parameters</p>
        default:
            return <p>Something really strange happened, unable to display array</p>
    }
}

export default DisplayTable;
