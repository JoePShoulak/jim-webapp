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

const formatPokeData = (data) => {
    let newData;

    if (_.includes(data, "-")) {
        newData = data.split("-").map((p) => (_.capitalize(p))).join(" ")
    } else {
        newData = _.capitalize(data)
    }

    return newData;
}

export {formatTableRows, formatPokeData};
