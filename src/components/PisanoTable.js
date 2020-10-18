import React from "react";
import {formatTableRows} from "../helpers/formatHelper";

const PisanoTable = (props) => {
    return <table><thead>{formatTableRows(props.table)}</thead></table>
}

export default PisanoTable;
