import React from "react";
import {TableBody, TableContainer} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const PisanoArray = (props) => {
    let rKey = 0;

    return(
        <TableContainer>
            <Table size={'small'}>
                <TableBody>
                    {props.table.map((row) => {
                        let cKey = 0;

                        return (
                            <TableRow key={rKey++}>
                                {row.map((cell) => {
                                    return (<TableCell align={'center'} key={cKey++}>{cell}</TableCell>)
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PisanoArray;
