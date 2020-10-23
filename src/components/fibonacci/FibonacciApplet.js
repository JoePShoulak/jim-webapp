import React from 'react';

import {useDispatch, useSelector} from "react-redux";

import {
    Card,
    CardContent,
    Typography,
    Hidden } from "@material-ui/core";

import {fibGen} from "../../helpers/mathHelper";
import {setCount} from "../../redux/actions/fibonacciActions";
import {setSnackbar} from "../../redux/actions/snackbarActions";

// TODO: Implement redux error handling, Material UI snack bar

const FibonacciApplet = () => {
    const dispatch = useDispatch();
    const fibonacciState = useSelector((state) => state.fibonacciReducer)

    const fitsRange = Math.abs(fibonacciState.count) < 1477
    const positive = (fibonacciState.count > 0)

    let result

    if (fitsRange) {
        result = <Typography display={'inline'}>{fibGen(fibonacciState.count)}</Typography>
    } else {
        result = <Typography display={'inline'} style={{color: '#F44336'}}>{"error"}</Typography>
        const errorMsg = `Error: number is too ${positive ? 'big' : 'small'} to calculate`
        dispatch(setSnackbar(true, 'error', errorMsg))
    }

    // TODO: Handle numbers that require scientific notation better

    return(
        <>
            <Card style={{
                maxWidth: 500,
                minWidth: 200
            }}>
                <CardContent style={{textAlign: 'center'}}>
                    <Hidden xsDown>
                        <Typography display={'inline'}>Fibonacci number {fibonacciState.count} is: </Typography>
                    </Hidden>
                    <Hidden smUp>
                        <Typography display={'inline'}>Fn({fibonacciState.count}) = </Typography>
                    </Hidden>
                    {result}
                    <br />

                    <input type={"number"}
                           value={fibonacciState.count}
                           onChange={(e) => dispatch(setCount(e.target.value))} />
                </CardContent>
            </Card>
        </>
    );
};

export default FibonacciApplet;
