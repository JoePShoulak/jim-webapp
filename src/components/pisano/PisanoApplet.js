import React, {useState} from 'react';
import _ from 'lodash';

import {makeTable}  from "../../helpers/mathHelper";
import PisanoTable  from "./PisanoTable";
import ErrorMessage from "../ErrorMessage";
import PisanoInput from "./PisanoInput";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const PisanoApplet = () => {
    const [height,   setHeight] = useState(5);
    const [modulus, setModulus] = useState(10);

    const [table, period] = makeTable(modulus, height);
    const validArray = !_.includes(_.flatten(table), undefined);

    return(
        <Card>
            <CardContent>
            <Typography>The Pisano Period of the Fibonacci numbers modulus {modulus} is {period}</Typography>

            <PisanoInput label={"Modulus"} value={modulus}
                         func={(e) => {setModulus(e.target.value >= 2 ? e.target.value : 2) }}
            />

            <PisanoInput label={"Height"} value={height}
                         func={(e) => {setHeight(e.target.value >= 2 ? e.target.value : 2) }}
            />

            {validArray ? <PisanoTable table={table}/> : <ErrorMessage type={"INVALID-ARRAY"}/>}
            </CardContent>
        </Card>
    )
};

export default PisanoApplet;
