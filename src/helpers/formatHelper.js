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



export {formatTableRows};
