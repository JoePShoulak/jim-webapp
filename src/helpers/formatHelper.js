import React from "react";
import _ from 'lodash';

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

const DisplayTable = (table) => {
    switch (!_.includes(_.flatten(table), undefined)) { // Reduces to if the flatten array included undefined
        case true:                                             // Undefined means there's an issue, so we set to the
            return <table><thead>{formatTableRows(table)}</thead></table>  // opposite of that value
        case false:
            return <p>Invalid array, check your parameters</p>
        default:
            return <p>Something really strange happened, unable to display array</p>
    }
}

export default DisplayTable;
