import React from 'react';

const ArrayInput = (props) => {
    const {label, value, func} = props;
    return(
        <div>
            <label>{label}: </label>
            <input type={"number"}
                   value={value}
                   min={2}
                   onChange={func} />
           <br />
        </div>
    )
}

export default ArrayInput;
