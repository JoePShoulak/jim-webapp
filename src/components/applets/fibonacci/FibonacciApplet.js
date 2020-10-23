import React from 'react';
import {fibGen} from "../../../helpers/mathHelper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../../redux/actions/fibonacciActions";
import Hidden from "@material-ui/core/Hidden";

// TODO: Implement redux error handling, Material UI snack bar

const FibonacciApplet = () => {
    const dispatch = useDispatch();
    const fibonacciState = useSelector((state) => state.fibonacciReducer)

    let fitsRange = Math.abs(fibonacciState.count) < 1477

    let result
    result = (fitsRange) ? (
        <Typography display={'inline'}>{fibGen(fibonacciState.count)}</Typography>
    ) : (
        <Typography display={'inline'} style={{color: '#F00'}}>{"Too big to calculate"}</Typography>
    )

    // TODO: Handle numbers that require scientific notation better

    return(
        <Card style={{maxWidth: 500}}>
            {console.log(this)}
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
    );
};

export default FibonacciApplet;
