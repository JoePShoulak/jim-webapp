import React from 'react';

import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";


const Footer = () => {

    return(
        <Toolbar style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            justifyContent: 'center'
        }}>
                <Typography style={{alignSelf: 'center'}} align={'center'}>A Joe Shoulak WebApp running on Node.js</Typography>
        </Toolbar>
    )
};

export default Footer;
