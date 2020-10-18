import React from "react";

const formatTable = (table) => {
    return table.map(row => <tr>{row.map(item =><td>{item}</td>)}</tr>)
}

const DisplayTable = (table, validArray) => {
    let response;

    switch (validArray) {
        case true:
            response = (
                <div>
                    <table>
                        <thead>
                        {formatTable(table)}
                        </thead>
                    </table>
                </div>
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
