import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Home      from "./pages/Home";
import About     from "./pages/About";
import Fibonacci from './pages/Fibonacci';
import Pisano    from './pages/Pisano';
import Pokemon   from "./pages/Pokemon";
import Weather   from "./pages/Weather";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Grid container justify={'center'}>
                <Grid item xs={6}>
                    <Switch>
                        <Route exact path={'/'}>          <Home />      </Route>
                        <Route exact path={'/about'}>     <About />     </Route>
                        <Route exact path={'/fibonacci'}> <Fibonacci /> </Route>
                        <Route exact path={'/pisano'}>    <Pisano />    </Route>
                        <Route exact path={'/pokemon'}>   <Pokemon />   </Route>
                        <Route exact path={'/weather'}>   <Weather />   </Route>

                        <Redirect to={"/"} />
                    </Switch>

                </Grid>
            </Grid>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
