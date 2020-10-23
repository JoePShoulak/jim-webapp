import React from "react";

import {
    Table,
    TableContainer,
    TableBody,
    TableRow,
    TableCell } from '@material-ui/core'

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
