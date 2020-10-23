import React from 'react';
import _ from 'lodash';

import {makeTable}  from "../../../helpers/mathHelper";
import PisanoArray  from "./PisanoArray";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {useDispatch, useSelector} from "react-redux";
import {setHeight, setModulus} from "../../../redux/actions/pisanoActions";

// TODO: Implement redux error handling, Material UI snack bar

const PisanoApplet = () => {
    const dispatch = useDispatch();
    const pisanoState = useSelector((state) => state.pisanoReducer)

    const [table, period] = makeTable(pisanoState.modulus, pisanoState.height);
    const validArray = !_.includes(_.flatten(table), undefined);

    return(
        <Card>
            <CardContent>
                <Typography>
                    The Pisano Period of the Fibonacci numbers modulus {pisanoState.modulus} is {period}
                </Typography>

                <label>Modulus</label>
                <input type={'number'}
                       value={pisanoState.modulus}
                       min={2}
                       onChange={(e) => {dispatch(setModulus(e.target.value))}}
                />
                <br />
                <label>Height</label>
                <input type={'number'}
                       value={pisanoState.height}
                       min={2}
                       onChange={(e) => {dispatch(setHeight(e.target.value))}}
                />

                {validArray ? <PisanoArray table={table}/> : <Typography>Invalid Pisano Array</Typography>}
            </CardContent>
        </Card>
    )
};

export default PisanoApplet;
