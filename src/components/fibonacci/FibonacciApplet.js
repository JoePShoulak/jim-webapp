import React from 'react';
import {fibGen} from "../../helpers/mathHelper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../redux/actions/fibonacciActions";

// TODO: Implement redux error handling, Material UI snack bar

const FibonacciApplet = () => {
    const dispatch = useDispatch();
    const fibonacciState = useSelector((state) => state.fibonacciReducer)

    return(
        <Card style={{

        }}>
            <CardContent>
                <Typography>Fibonacci number {fibonacciState.count} is: {fibGen(fibonacciState.count)}</Typography>

                <input type={"number"}
                       value={fibonacciState.count}
                       onChange={(e) => dispatch(setCount(e.target.value))} />
            </CardContent>
        </Card>
    );
};

export default FibonacciApplet;
