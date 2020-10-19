import React from "react";
import {formatTableRows} from "../helpers/formatHelper";

const PisanoTable = (props) => {
    return <table className={"pisano"}><thead className={"pisano"}>{formatTableRows(props.table)}</thead></table>
}

export default PisanoTable;
