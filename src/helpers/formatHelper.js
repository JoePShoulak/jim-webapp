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
    let response;

    switch (validArray) {
        case true:
            response = (
                <table><thead>{formatTableRows(table)}</thead></table>
            )
            break;
        case false:
            response = <p>Invalid array, check your parameters</p>
            break;
        default:
            response =  <p>Something really strange happened, unable to display array</p>
            break;
    }

    return response;
}

export default DisplayTable;
