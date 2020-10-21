import React, {useState} from 'react';
import {fibGen} from "../../helpers/mathHelper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const FibonacciApplet = () => {
    const [count, setCount] = useState(1);

    return(
        <Card>
            <CardContent>
                <Typography>Fibonacci number {count} is: {fibGen(count)}</Typography>

                <input type={"number"}
                       value={count}
                       onChange={(e) => setCount(parseInt(e.target.value))} />
            </CardContent>
        </Card>
    );
};

export default FibonacciApplet;
